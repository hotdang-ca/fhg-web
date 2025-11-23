import { User, DollarSign, MessageCircle, MapPin, UserCheck } from 'lucide-react';

export default function WhyMe() {
    return (
        <section id="why-me" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">
                        Why Work With Me?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        I specialize in small, quick projects. Micro-businesses and community groups are my favourite clients — because you move fast and know what you want.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Reason 1 */}
                    <div className="space-y-4">
                        <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center text-primary">
                            <DollarSign className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold font-heading text-foreground">Affordable, clear pricing</h3>
                        <p className="text-muted-foreground text-sm">
                            No tall invoices. No agency overhead. Just practical solutions that fit real small-business budgets.
                        </p>
                    </div>

                    {/* Reason 2 */}
                    <div className="space-y-4">
                        <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center text-primary">
                            <MessageCircle className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold font-heading text-foreground">Plain-English communication</h3>
                        <p className="text-muted-foreground text-sm">
                            I'll explain everything without jargon. (Unless you want jargon. Then I'll open the floodgates.)
                        </p>
                    </div>

                    {/* Reason 3 */}
                    <div className="space-y-4">
                        <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center text-primary">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold font-heading text-foreground">Canadian-based</h3>
                        <p className="text-muted-foreground text-sm">
                            Local timezone, Canadian billing, quick response times.
                        </p>
                    </div>

                    {/* Reason 4 */}
                    <div className="space-y-4">
                        <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center text-primary">
                            <UserCheck className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold font-heading text-foreground">One person. No hand-offs.</h3>
                        <p className="text-muted-foreground text-sm">
                            When you work with me, you get… me. Not three PMs, two interns, and a giraffe mascot. (Although I am open to acquiring a giraffe mascot.)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
