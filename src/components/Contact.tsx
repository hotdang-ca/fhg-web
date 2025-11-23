import { Mail, Calendar } from 'lucide-react';

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

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                        <a
                            href="#"
                            className="inline-flex h-14 items-center justify-center rounded-full bg-background px-8 text-lg font-bold text-primary shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                        >
                            <Calendar className="mr-2 h-5 w-5" />
                            Book a Free Call
                        </a>
                        <a
                            href="mailto:james@fourandahalfgiraffes.ca"
                            className="inline-flex h-14 items-center justify-center rounded-full border-2 border-primary-foreground bg-transparent px-8 text-lg font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                        >
                            <Mail className="mr-2 h-5 w-5" />
                            james@fourandahalfgiraffes.ca
                        </a>
                    </div>

                    <p className="text-sm text-primary-foreground/80 pt-8">
                        No big commitments — just a small step to make your tech stand taller.
                    </p>
                </div>
            </div>
        </section>
    );
}
