import { Wrench, Smartphone, Zap, Clock } from 'lucide-react';

export default function Services() {
    return (
        <section id="services" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">
                        What I Do <span className="text-primary">(For Real People With Real Small Problems)</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Service 1 */}
                    <div className="bg-orange-50/50 rounded-2xl p-8 border border-orange-100 hover:border-orange-200 transition-colors">
                        <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center text-primary mb-6">
                            <Wrench className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold font-heading text-foreground mb-4">Website Fixes & Improvements</h3>
                        <p className="text-muted-foreground mb-4 italic">Broken pages? Slow site? Content out of date?</p>
                        <p className="text-sm font-semibold text-foreground mb-2">I help with:</p>
                        <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                            <li>• Fixing errors & bugs</li>
                            <li>• Updating content</li>
                            <li>• Improving layout/navigation</li>
                            <li>• Adding forms, booking, or payments</li>
                            <li>• Speed optimizations</li>
                            <li>• Accessibility improvements</li>
                        </ul>
                        <p className="text-primary font-bold">Typical cost: $150–$500</p>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-orange-50/50 rounded-2xl p-8 border border-orange-100 hover:border-orange-200 transition-colors">
                        <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center text-primary mb-6">
                            <Smartphone className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold font-heading text-foreground mb-4">Small Apps & Internal Tools</h3>
                        <p className="text-muted-foreground mb-4 italic">Need a custom tool that’s too small for a big agency?</p>
                        <p className="text-sm font-semibold text-foreground mb-2">I build:</p>
                        <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                            <li>• Mini CRMs</li>
                            <li>• Inventory or asset trackers</li>
                            <li>• Time-saving workflows</li>
                            <li>• Reporting dashboards</li>
                            <li>• Lightweight staff tools</li>
                        </ul>
                        <p className="text-primary font-bold">Typical cost: $500–$2,000</p>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-orange-50/50 rounded-2xl p-8 border border-orange-100 hover:border-orange-200 transition-colors">
                        <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center text-primary mb-6">
                            <Zap className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold font-heading text-foreground mb-4">Automations & Integrations</h3>
                        <p className="text-muted-foreground mb-4 italic">Let your business run a little taller without extra effort.</p>
                        <p className="text-sm font-semibold text-foreground mb-2">I can:</p>
                        <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                            <li>• Automate repetitive tasks</li>
                            <li>• Connect your tools together</li>
                            <li>• Sync apps, forms, spreadsheets, and email</li>
                            <li>• Build workflow triggers & reminders</li>
                        </ul>
                        <p className="text-primary font-bold">Typical cost: $200–$800</p>
                    </div>
                </div>

                {/* Maintenance */}
                <div className="mt-12 bg-secondary text-secondary-foreground rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center">
                                <Clock className="h-5 w-5" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading">Maintenance & Ongoing Help</h3>
                        </div>
                        <p className="text-secondary-foreground/80 text-lg mb-2">Think of this as your tech buddy on retainer.</p>
                        <p className="text-sm text-secondary-foreground/60">Includes: Updates & fixes • Security patches • Tiny content tweaks • Backups • Priority response</p>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-3xl font-bold">From $75/month</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
