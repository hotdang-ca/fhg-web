'use client';

import { useState } from 'react';
import { submitContactForm } from '@/app/actions';
import { Loader2, CheckCircle } from 'lucide-react';

export default function ContactForm() {
    const [pending, setPending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');

    async function handleSubmit(formData: FormData) {
        setPending(true);
        setMessage('');

        const result = await submitContactForm(formData);

        setPending(false);
        if (result.success) {
            setSuccess(true);
        }
        setMessage(result.message);
    }

    if (success) {
        return (
            <div className="bg-background rounded-2xl p-8 shadow-lg text-center max-w-lg mx-auto animate-in fade-in zoom-in duration-500">
                <div className="flex justify-center mb-4">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">{message}</p>
                <p className="text-sm text-muted-foreground mt-4">
                    I'll be in touch shortly.
                </p>
            </div>
        );
    }

    return (
        <form action={handleSubmit} className="bg-background rounded-2xl p-8 shadow-lg max-w-lg mx-auto text-left space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    placeholder="Your Name"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        placeholder="(555) 123-4567"
                    />
                </div>
            </div>
            <p className="text-xs text-muted-foreground italic">* Please provide either email or phone.</p>

            <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground mb-1">Preferred Time to Chat</label>
                <input
                    type="datetime-local"
                    id="preferredTime"
                    name="preferredTime"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    placeholder="How can I help?"
                ></textarea>
            </div>

            {message && !success && (
                <div className="text-red-500 text-sm font-medium">{message}</div>
            )}

            <button
                type="submit"
                disabled={pending}
                className="w-full inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
                {pending ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                    </>
                ) : (
                    "Send Message"
                )}
            </button>
        </form>
    );
}
