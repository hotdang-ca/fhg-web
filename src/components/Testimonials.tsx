import { Star } from 'lucide-react';

export default function Testimonials() {
    return (
        <section className="py-20 md:py-32 bg-orange-50/30 snap-start">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">
                        Happy Clients
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-orange-50/30 rounded-2xl p-8">
                        <div className="flex gap-1 text-primary mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-current" />
                            ))}
                        </div>
                        <p className="text-lg text-foreground italic mb-4">
                            “We finally found someone willing to do the small jobs.”
                        </p>
                    </div>
                    <div className="bg-orange-50/30 rounded-2xl p-8">
                        <div className="flex gap-1 text-primary mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-current" />
                            ))}
                        </div>
                        <p className="text-lg text-foreground italic mb-4">
                            “Clear, fast, and within our budget. Perfect.”
                        </p>
                    </div>
                    <div className="bg-orange-50/30 rounded-2xl p-8">
                        <div className="flex gap-1 text-primary mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-current" />
                            ))}
                        </div>
                        <p className="text-lg text-foreground italic mb-4">
                            “Our website works again. Bless this giraffe.”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
