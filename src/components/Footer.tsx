import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="w-full border-t border-orange-100 bg-orange-50/50 py-12 md:py-16 lg:py-20 snap-start">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/logo-sm.png"
                                    alt="FHG Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-heading font-bold text-lg text-foreground">
                                Four And A Half Giraffes
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Standing tall to help small Canadian businesses with websites, apps, & automation.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#services" className="hover:text-primary transition-colors">
                                    Website Fixes
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="hover:text-primary transition-colors">
                                    Small Apps
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="hover:text-primary transition-colors">
                                    Automations
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#why-me" className="hover:text-primary transition-colors">
                                    Why Work With Me?
                                </Link>
                            </li>
                            <li>
                                <Link href="#portfolio" className="hover:text-primary transition-colors">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Contact</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="mailto:james@fourandahalfgiraffes.ca" className="hover:text-primary transition-colors">
                                    james@fourandahalfgiraffes.ca
                                </a>
                            </li>
                            <li className="text-muted-foreground">
                                Based in Canada 🇨🇦
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-orange-200 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Four And A Half Giraffes, Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
