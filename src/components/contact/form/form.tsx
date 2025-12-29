'use client';

import { useActionState } from 'react';
import { submitContactForm, type ContactFormState } from '@/actions/contact';

const initialState: ContactFormState = {
  success: false,
  error: '',
};

export function Form() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.success) {
    return (
      <div className="rounded-lg bg-green-500/10 p-6 text-center text-green-500">
        <h3 className="mb-2 text-xl font-bold">Message Sent!</h3>
        <p>Thank you for reaching out. I&apos;ll get back to you soon.</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 text-sm underline hover:no-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="mx-auto flex w-full max-w-md flex-col gap-6"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-foreground/80 text-sm font-medium"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="border-foreground/10 bg-background text-foreground focus:border-primary focus:ring-primary rounded-md border px-4 py-2 focus:ring-1 focus:outline-none"
          placeholder="John Doe"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-foreground/80 text-sm font-medium"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="border-foreground/10 bg-background text-foreground focus:border-primary focus:ring-primary rounded-md border px-4 py-2 focus:ring-1 focus:outline-none"
          placeholder="john@example.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-foreground/80 text-sm font-medium"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="border-foreground/10 bg-background text-foreground focus:border-primary focus:ring-primary resize-none rounded-md border px-4 py-2 focus:ring-1 focus:outline-none"
          placeholder="Your message here..."
        />
      </div>

      {state.error && <p className="text-sm text-red-500">{state.error}</p>}

      <button
        type="submit"
        disabled={isPending}
        className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-3 font-bold transition-all disabled:opacity-50"
      >
        {isPending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
