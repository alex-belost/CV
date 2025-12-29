'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export type ContactFormState = {
  success: boolean;
  error: string;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { success: false, error: 'All fields are required' };
  }

  try {
    await prisma.contactMessage.create({
      data: {
        name,
        email,
        message,
      },
    });

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Failed to submit contact form:', error);
    return { success: false, error: 'Failed to send message' };
  }
}
