'use client';

import { Loader2, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

const STEPS = [
    "Analyzing your request...",
    "Designing architecture...",
    "Estimating timeline...",
    "Drafting plan..."
];

export default function ThinkingProcess() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Transition through steps
        if (currentStepIndex < STEPS.length - 1) {
            const timeout = setTimeout(() => {
                setCurrentStepIndex(prev => prev + 1);
            }, 1500); // 1.5 seconds per step
            return () => clearTimeout(timeout);
        } else {
            // Final step: progress bar animation
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 95) return 95; // Stall at 95%
                    return prev + (Math.random() * 5); // Random increment
                });
            }, 500);
            return () => clearInterval(interval);
        }
    }, [currentStepIndex]);

    return (
        <div className="w-full max-w-2xl mx-auto py-12 text-center space-y-8 animate-in fade-in duration-500">
            <div className="relative inline-flex mb-4">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
                <div className="relative bg-background rounded-full p-6 shadow-xl ring-1 ring-white/10">
                    <Loader2 className="w-16 h-16 text-primary animate-spin" />


                </div>
            </div>

            <div className="space-y-4 max-w-sm mx-auto w-full px-4">
                {STEPS.map((step, index) => {
                    const isActive = index === currentStepIndex;
                    const isCompleted = index < currentStepIndex;

                    return (
                        <div
                            key={index}
                            className={`flex items-center gap-2 transition-all duration-500 ease-in-out ${isActive ? 'opacity-100 translate-x-2'
                                : isCompleted ? 'opacity-70 translate-x-0'
                                    : 'opacity-40 translate-x-0'
                                }`}
                        >

                            {/* Step Indicator */}
                            <span className={`
                                w-5 h-5 rounded-full flex items-center justify-center border shrink-0 transition-colors duration-300
                                ${isActive ? 'border-primary bg-primary text-primary-foreground scale-110 shadow-[0_0_10px_rgba(234,88,12,0.5)]'
                                    : isCompleted ? 'border-primary/50 bg-transparent text-primary/50'
                                        : 'border-muted-foreground/20 bg-transparent'}
                            `}>
                                {isCompleted ? (
                                    <Check className="w-3 h-3 text-white" />
                                ) : (
                                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-current animate-pulse' : 'bg-transparent'}`} />
                                )}
                            </span>

                            {/* Step Text */}
                            <span className={`text-xs font-bold transition-all duration-300 ${isActive ? 'text-muted-foreground font-bold text-[1.2rem]'
                                : isCompleted ? 'text-muted-foreground/40'
                                    : 'text-muted-foreground/40'
                                }`}>
                                {step}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Progress Bar for Final Step */}
            <div className={`max-w-sm mx-auto w-full px-4 transition-all duration-700 delay-200 ${currentStepIndex === STEPS.length - 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="h-1.5 w-full bg-black/10 overflow-hidden rounded-full ring-1 ring-white/10">
                    <div
                        className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="mt-1.5 flex justify-end">
                    <span className="text-[10px] font-mono text-primary-foreground/60">{Math.round(progress)}%</span>
                </div>
            </div>
        </div>
    );
}
