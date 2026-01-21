'use client';

import { Lock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface PlanPreviewProps {
    planContent: string;
    onUnlock: () => void;
}

export default function PlanPreview({ planContent, onUnlock }: PlanPreviewProps) {
    return (
        <div className="w-full max-w-3xl mx-auto animate-in fade-in zoom-in duration-500">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold font-heading mb-2">
                    Your Plan is Ready!
                </h3>
                <p className="text-primary-foreground/80">
                    I've generated a detailed breakdown for your project.
                </p>
            </div>

            <div className="relative rounded-2xl bg-background border border-border shadow-2xl overflow-hidden">
                {/* Blurred Content Preview */}
                <div className="p-8 opacity-50 blur-sm select-none h-[400px] overflow-hidden">
                    <div className="prose prose-sm max-w-none dark:prose-invert">
                        <ReactMarkdown>
                            {planContent}
                        </ReactMarkdown>
                    </div>
                </div>

                {/* Unlock Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-b from-transparent via-background/80 to-background p-6">
                    <div className="bg-background/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl text-center space-y-6 max-w-md">
                        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                            <Lock className="w-8 h-8 text-primary" />
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-xl font-bold text-foreground">
                                Unlock Your Free Implementation Plan
                            </h4>
                            <p className="text-sm text-foreground">
                                Enter your details to reveal the full analysis and get a copy sent to your email.
                            </p>
                        </div>

                        <button
                            onClick={onUnlock}
                            className="w-full bg-primary text-primary-foreground font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Reveal My Plan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
