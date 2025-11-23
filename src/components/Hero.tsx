import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative overflow-hidden py-20 md:py-32 lg:py-40 bg-gradient-to-b from-orange-50 to-background snap-start">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
                    <div className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
                        Small jobs welcomed. Quick fixes celebrated.
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-foreground">
                        Standing tall to help small Canadian businesses with <span className="text-primary">websites, apps, & automation.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Running a tiny business doesn’t mean your technology should come up short.
                        I help Canadian small businesses, solo entrepreneurs, and community organizations build simple, affordable digital tools — fast.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="#contact"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Book a Free Call
                        </Link>
                        <Link
                            href="#packages"
                            className="inline-flex h-12 items-center justify-center rounded-md border-2 border-primary bg-transparent px-8 text-lg font-medium text-primary shadow-sm transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            View Packages
                        </Link>
                    </div>
                    <p className="text-sm text-muted-foreground pt-4">
                        Because even small problems deserve tall solutions.
                    </p>
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-orange-200 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
}
