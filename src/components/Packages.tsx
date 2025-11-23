import { Check } from 'lucide-react';
import Link from 'next/link';

export default function Packages() {
    return (
        <section id="packages" className="py-20 md:py-32 bg-orange-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-4">
                        Popular Fixed-Price Giraffe-Sized Packages
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        (Clear, simple—great for micro-clients and SEO)
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Package 1 */}
                    <div className="bg-background rounded-2xl p-8 shadow-sm border border-orange-100 flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold font-heading text-foreground">Website Tune-Up</h3>
                            <div className="mt-2 text-3xl font-bold text-primary">$250</div>
                        </div>
                        <p className="text-muted-foreground mb-6">A quick “neck stretch” for your site.</p>
                        <ul className="space-y-3 mb-8 flex-1">
                            {['Fix issues', 'Speed optimization', 'Content updates', 'Structure improvements', 'Essential SEO basics'].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm">
                                    <Check className="h-5 w-5 text-primary shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="#contact" className="w-full inline-flex h-10 items-center justify-center rounded-md border border-primary text-primary font-medium hover:bg-primary/5 transition-colors">
                            Get Tuned Up
                        </Link>
                    </div>

                    {/* Package 2 */}
                    <div className="bg-background rounded-2xl p-8 shadow-md border-2 border-primary relative flex flex-col transform md:-translate-y-4">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            Most Popular
                        </div>
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold font-heading text-foreground">Mini Automation</h3>
                            <div className="mt-2 text-3xl font-bold text-primary">$350</div>
                        </div>
                        <p className="text-muted-foreground mb-6">Save 1–5 hours/week with a tiny, mighty automation.</p>
                        <ul className="space-y-3 mb-8 flex-1">
                            {['Connect apps', 'Auto-send emails', 'Google Sheets workflows', 'Trigger-based reminders'].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm">
                                    <Check className="h-5 w-5 text-primary shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="#contact" className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-sm">
                            Automate It
                        </Link>
                    </div>

                    {/* Package 3 */}
                    <div className="bg-background rounded-2xl p-8 shadow-sm border border-orange-100 flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold font-heading text-foreground">Small App Starter</h3>
                            <div className="mt-2 text-3xl font-bold text-primary">$950</div>
                        </div>
                        <p className="text-muted-foreground mb-6">A lightweight custom tool built for your workflow.</p>
                        <ul className="space-y-3 mb-8 flex-1">
                            {['Login', 'Simple screens', 'Custom logic', 'Export/reporting', 'Ready to grow taller later'].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm">
                                    <Check className="h-5 w-5 text-primary shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="#contact" className="w-full inline-flex h-10 items-center justify-center rounded-md border border-primary text-primary font-medium hover:bg-primary/5 transition-colors">
                            Start Building
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
