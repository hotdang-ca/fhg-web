'use client';

import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface PromptInputProps {
    onSubmit: (prompt: string) => void;
    onSkip: () => void;
}

export default function PromptInput({ onSubmit, onSkip }: PromptInputProps) {
    const [prompt, setPrompt] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (prompt.trim()) {
            onSubmit(prompt);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-2 text-center">
                <h3 className="text-xl md:text-2xl font-bold font-heading">
                    Describe your dream project
                </h3>
                <p className="text-primary-foreground/80">
                    Tell me what you want to build. I'll generate a plan for you instantly.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="relative">
                <div className="relative rounded-2xl bg-background shadow-xl overflow-hidden ring-1 ring-white/10">
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="E.g., I need a website for my custom furniture business where customers can view products and request quotes..."
                        className="w-full min-h-[160px] p-6 bg-transparent text-foreground placeholder:text-muted-foreground resize-none focus:outline-none text-lg"
                        required
                    />

                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                        <button
                            type="button"
                            onClick={onSkip}
                            className="px-4 py-2 text-sm font-medium text-zinc-500 hover:text-foreground transition-colors"
                        >
                            Skip & Contact
                        </button>
                        <button
                            type="submit"
                            disabled={!prompt.trim()}
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-bold transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Sparkles className="w-4 h-4" />
                            Generate Plan
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
