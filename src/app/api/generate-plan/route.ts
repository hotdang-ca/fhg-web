import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { prompt } = await req.json();

    const result = streamText({
        model: openai('gpt-4o'),
        system: 'You are a helpful software architect and business consultant. You are analyzing a user request for a new software project. You should provide a high-level breakdown of what building this would involve, including potential features, tech stack recommendations, and rough timeline estimates. Keep the tone professional, encouraging, and expert. Do not ask for contact info, just analyze the project.',
        prompt: prompt,
    });

    return result.toTextStreamResponse();
}
