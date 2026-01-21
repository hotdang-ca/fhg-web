import { Mail, Calendar } from 'lucide-react';
import AILeadCapture from './AILeadCapture';

export default function Contact() {
    return (
        <section id="contact" className="py-20 md:py-32 bg-primary text-primary-foreground snap-start">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading">
                        Ready to Chat? Free 15-Minute Call
                    </h2>
                    <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
                        Let’s talk through your problem. Find out exactly what it costs, and how quickly I can get it done.
                    </p>

                    <div className="pt-8">
                        <AILeadCapture />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 opacity-80">
                        <p className="text-sm">Or email directly:</p>
                        <a
                            href="mailto:james@fourandahalfgiraffes.ca"
                            className="inline-flex items-center font-bold hover:underline"
                        >
                            <Mail className="mr-2 h-4 w-4" />
                            james@fourandahalfgiraffes.ca
                        </a>
                    </div>

                    <p className="text-sm text-primary-foreground/80 pt-4">
                        No big commitments — just a small step to make your tech stand taller.
                    </p>
                </div>
            </div>
        </section>
    );
}
