'use client';

import { useState } from 'react';
import { submitContactForm } from '@/app/actions';
import { Loader2, CheckCircle, ArrowLeft, Copy, Check } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface LeadFormProps {
    planContent?: string;
    onBack?: () => void;
    userPrompt?: string;
}

export default function LeadForm({ planContent, onBack, userPrompt }: LeadFormProps) {
    const [pending, setPending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [serverMessage, setServerMessage] = useState('');
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        if (planContent) {
            await navigator.clipboard.writeText(planContent);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    async function handleSubmit(formData: FormData) {
        setPending(true);
        setServerMessage('');

        let fullMessage = formData.get('message') as string;

        if (userPrompt) {
            fullMessage = `[USER PROMPT]\n${userPrompt}\n\n${fullMessage}`;
        }

        // If we have a generated plan, append it to the message or a separate field
        if (planContent) {
            fullMessage = `${fullMessage}\n\n[AI PLAN GENERATED]\n${planContent}`;
        }

        formData.set('message', fullMessage);

        const result = await submitContactForm(formData);

        setPending(false);
        if (result.success) {
            setSuccess(true);
        }
        setServerMessage(result.message);
    }

    if (success) {
        return (
            <div className="bg-background rounded-2xl p-8 shadow-2xl text-center max-w-lg mx-auto animate-in fade-in zoom-in duration-500 border border-white/10">
                <div className="flex justify-center mb-4">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-foreground mb-2">Message Sent!</h3>
                <p className="text-foreground">{serverMessage}</p>
                <p className="text-sm text-foreground mt-4">
                    I've received your request and the AI-generated plan. I'll be in touch shortly.
                </p>
                {planContent && (
                    <div className="mt-6 text-left">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-bold text-foreground uppercase">Your Plan:</p>
                            <button
                                onClick={handleCopy}
                                className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-foreground transition-colors"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-3.5 h-3.5 text-green-500" />
                                        Copied
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-3.5 h-3.5" />
                                        Copy to Clipboard
                                    </>
                                )}
                            </button>
                        </div>
                        <div className="p-4 bg-white rounded-lg border border-border shadow-sm max-h-80 overflow-y-auto">
                            <div className="prose prose-sm max-w-none text-black">
                                <ReactMarkdown>
                                    {planContent}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {onBack && (
                <button
                    onClick={onBack}
                    className="mb-4 flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </button>
            )}

            <form action={handleSubmit} className="bg-background rounded-2xl p-6 md:p-8 shadow-2xl max-w-lg mx-auto text-left space-y-4 border border-white/10">
                <div className="text-center mb-6">
                    <h3 className="text-xl font-bold font-heading text-foreground">
                        {planContent ? "Final Step: Get Your Plan" : "Let's Chat"}
                    </h3>
                    <p className="text-sm text-zinc-600">
                        {planContent
                            ? "Where should I send this analysis?"
                            : "Fill out the form below to get started."}
                    </p>
                </div>

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-zinc-400 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-zinc-400 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-zinc-400 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                            placeholder="(555) 123-4567"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message (Optional)</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={2}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        placeholder="Any other details..."
                    ></textarea>
                </div>

                {serverMessage && !success && (
                    <div className="text-red-500 text-sm font-medium">{serverMessage}</div>
                )}

                <button
                    type="submit"
                    disabled={pending}
                    className="w-full inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-lg font-bold text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
        </div>
    );
}
