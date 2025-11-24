import ProjectCarousel from './ProjectCarousel';

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-20 md:py-32 bg-background snap-start">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">
                        Recent Projects
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Real solutions for real businesses. Simple, effective, and affordable.
                    </p>
                </div>

                <ProjectCarousel />
            </div>
        </section>
    );
}
