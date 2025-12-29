'use client'

import { useActionState } from 'react'
import { submitContactForm } from '@/actions/contact'

const initialState = {
    success: false,
    error: '',
}

export function Form() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

    if (state.success) {
        return (
            <div className="p-6 rounded-lg bg-green-500/10 text-green-500 text-center">
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 text-sm underline hover:no-underline"
                >
                    Send another message
                </button>
            </div>
        )
    }

    return (
        <form action={formAction} className="flex flex-col gap-6 w-full max-w-md mx-auto">
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="rounded-md border border-foreground/10 bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="John Doe"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="rounded-md border border-foreground/10 bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="john@example.com"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="rounded-md border border-foreground/10 bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    placeholder="Your message here..."
                />
            </div>

            {state.error && (
                <p className="text-red-500 text-sm">{state.error}</p>
            )}

            <button
                type="submit"
                disabled={isPending}
                className="rounded-full bg-foreground text-background px-8 py-3 font-bold hover:bg-foreground/90 disabled:opacity-50 transition-all"
            >
                {isPending ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    )
}
