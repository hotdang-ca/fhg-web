'use client';

import { useState } from 'react';
import PromptInput from './PromptInput';
import ThinkingProcess from './ThinkingProcess';
import PlanPreview from './PlanPreview';
import LeadForm from './LeadForm';

type Step = 'idle' | 'thinking' | 'review' | 'form' | 'contact_only';

export default function AILeadCapture() {
    const [step, setStep] = useState<Step>('idle');
    const [prompt, setPrompt] = useState('');
    const [plan, setPlan] = useState('');

    const handlePromptSubmit = async (userPrompt: string) => {
        setPrompt(userPrompt);
        setStep('thinking');

        try {
            const response = await fetch('/api/generate-plan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: userPrompt }),
            });

            if (!response.ok) throw new Error('Failed to generate plan');

            // Handle streaming response
            const reader = response.body?.getReader();
            const decoder = new TextDecoder();
            let accumulatedPlan = '';

            if (reader) {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    const chunk = decoder.decode(value);
                    accumulatedPlan += chunk;
                    // Ideally we could show streaming text here, but for now we wait or just update state
                }
                setPlan(accumulatedPlan);
                setStep('review');
            }
        } catch (error) {
            console.error(error);
            // Fallback to contact form if AI fails
            setStep('contact_only');
        }
    };

    const handleSkip = () => {
        setStep('contact_only');
    };

    const handleUnlock = () => {
        setStep('form');
    };

    return (
        <div className="w-full transition-all duration-500 ease-in-out">
            {step === 'idle' && (
                <PromptInput
                    onSubmit={handlePromptSubmit}
                    onSkip={handleSkip}
                />
            )}

            {step === 'thinking' && (
                <ThinkingProcess />
            )}

            {step === 'review' && (
                <PlanPreview
                    planContent={plan}
                    onUnlock={handleUnlock}
                />
            )}

            {step === 'form' && (
                <LeadForm
                    planContent={plan}
                    onBack={() => setStep('review')}
                />
            )}

            {step === 'contact_only' && (
                <LeadForm
                    onBack={() => setStep('idle')}
                />
            )}
        </div>
    );
}
