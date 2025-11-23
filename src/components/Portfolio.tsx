export default function Portfolio() {
    return (
        <section id="portfolio" className="py-20 md:py-32 bg-background snap-start">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">
                        Small Wins Portfolio
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Short, simple, relatable examples. Your project can be this size too.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-background rounded-2xl p-8 border border-orange-100 shadow-sm">
                        <p className="text-xl font-medium text-foreground mb-4">
                            “Added a membership sign-up form for a community centre — same day.”
                        </p>
                    </div>
                    <div className="bg-background rounded-2xl p-8 border border-orange-100 shadow-sm">
                        <p className="text-xl font-medium text-foreground mb-4">
                            “Built a small scheduling tool for a mobile detailer — under $1,200.”
                        </p>
                    </div>
                    <div className="bg-background rounded-2xl p-8 border border-orange-100 shadow-sm">
                        <p className="text-xl font-medium text-foreground mb-4">
                            “Fixed a local shop’s broken contact form — $150.”
                        </p>
                    </div>
                    <div className="bg-background rounded-2xl p-8 border border-orange-100 shadow-sm">
                        <p className="text-xl font-medium text-foreground mb-4">
                            “Created automated weekly reports for a bakery — saved 3 hours/week.”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
