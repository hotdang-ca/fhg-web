'use server';

import { db } from "@/db";
import { submissions } from "@/db/schema";

export async function submitContactForm(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const preferredTime = formData.get("preferredTime") as string;
    const message = formData.get("message") as string;

    if (!name) {
        return { success: false, message: "Name is required." };
    }

    if (!email && !phone) {
        return { success: false, message: "Please provide either an email or a phone number." };
    }

    try {
        await db.insert(submissions).values({
            name,
            email,
            phone,
            preferredTime,
            message,
        });

        return { success: true, message: "Thanks! I'll get back to you asap." };
    } catch (error) {
        console.error("Submission error:", error);
        return { success: false, message: "Something went wrong. Please try again." };
    }
}
