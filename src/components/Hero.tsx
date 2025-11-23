import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-20 pb-0 md:pt-32 lg:pt-40 bg-gradient-to-b from-orange-50 to-background snap-start">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
                    <div className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
                        Web Development & Automation for Small Business
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-foreground">
                        I Build <span className="text-primary">Small, Useful Things</span> for Your Business.
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        No bloated agencies. No confusing jargon. Just a guy who likes fixing problems with code.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="#contact"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Book a Free Call
                        </Link>
                        <Link
                            href="#services"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            See What I Do
                        </Link>
                    </div>
                </div>
            </div>

            {/* Giraffe Head Image */}
            <div className="relative w-full flex justify-center mt-12 z-0">
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                    <Image
                        src="/giraffe-head.png"
                        alt="Four And A Half Giraffes"
                        fill
                        className="object-contain object-bottom"
                        priority
                    />
                </div>
            </div>

            {/* Wave Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
                <svg
                    className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-background"
                    ></path>
                </svg>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-orange-200 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
}
