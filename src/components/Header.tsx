import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-orange-100 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <span className="font-heading text-xl font-bold text-primary tracking-tight">
                        Four And A Half Giraffes
                    </span>
                </Link>
                <nav className="hidden md:flex gap-6">
                    <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                        Services
                    </Link>
                    <Link href="#packages" className="text-sm font-medium hover:text-primary transition-colors">
                        Packages
                    </Link>
                    <Link href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
                        Portfolio
                    </Link>
                    <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link
                        href="#contact"
                        className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        Book a Call
                    </Link>
                    <button className="md:hidden p-2 text-foreground">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
