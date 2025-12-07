import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface Project {
    title: string;
    company: string;
    description: string;
    cost?: string;
    image: string;
    url?: string;
}

const projects: Project[] = [
    {
        title: "Museum CRM",
        company: "Manitoba Computer & Gaming Museum",
        description: "A CRM for the Manitoba Computer & Gaming Museum.",
        cost: "$1000",
        image: "/museum-crm.png",
        url: "https://museum-app-ten.vercel.app/"
    },
    {
        title: "Custom Leaderboard App",
        company: "Regina Villains Strength And Conditioning",
        description: "Empower engagement and friendly competition among clients by tracking and displaying individual and team performance.",
        cost: "$800",
        image: "/regina-villains.png",
        url: "https://leaderboards.reginavillains.com/leaderboards"
    },
    {
        title: "Square Online Ordering",
        company: "Stone's Throw Coffee Collective",
        description: "Enable online ordering and payments, without sacrificing profits to third-party food ordering platforms.",
        cost: "$500",
        image: "/stones-throw.png",
        url: "https://stonesthrowcoffeecollective.ca/"
    },
    {
        title: "Used Market Crawler",
        company: "Tyson Wark",
        description: "Continously and autonomously crawl used cars for sale, sending a notification for the best deals so he could buy low and re-sell high.",
        cost: "$1800",
        image: "/used-market.png",
        url: "https://mpn.fourandahalfgiraffes.ca/dashboard"
    },
    {
        title: "URL Previewer",
        company: "Private",
        description: "Grab meta tags from Canadian news outlets (or any other website) and re-host them for sharing on social media.",
        cost: "$200",
        image: "/url-previewer.png",
    },
    {
        title: "Wordle Multiplayer",
        company: "Private",
        description: "Turn-based Wordle with your friends and family.",
        cost: "$399",
        image: "/wordle-multiplayer.png",
        url: "https://wm.fourandahalfgiraffes.ca/"
    },
    {
        title: "Get A Job: Job Cover Letter Generator",
        company: "Private",
        description: "Generate cover letters for job applications, and track application process.",
        cost: "$299",
        image: "/job-cover-letter.png",
        url: "https://getajob.fourandahalfgiraffes.ca/"
    },
    {
        title: "Apple Wallet Card Generator",
        company: "Private",
        description: "Generate Apple Wallet cards for clients to use for loyalty rewards.",
        image: "/apple-wallet-card-generator.png",
        url: "https://v0-apple-wallet-pass-generator.vercel.app/"
    },
];

export default function ProjectCarousel() {
    return (
        <div className="w-full overflow-x-auto pb-6 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory scrollbar-hide">
            <div className="flex gap-6 w-max md:w-full md:grid md:grid-cols-3">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="w-[85vw] md:w-auto flex-shrink-0 snap-center bg-card rounded-xl border border-border shadow-sm overflow-hidden flex flex-col h-full transition-all hover:shadow-md"
                    >
                        <div className="relative w-full aspect-video border-b border-border/50">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="font-heading font-bold text-lg text-foreground">{project.title}</h3>
                                    <p className="text-sm text-primary font-medium">{project.company}</p>
                                </div>
                                {project.cost && <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                    {project.cost}
                                </span>}
                            </div>
                            <p className="text-muted-foreground text-sm mb-4 flex-grow">
                                {project.description}
                            </p>
                            {project.url ? <Link
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-medium text-primary hover:underline mt-auto"
                            >
                                View Project <ExternalLink className="ml-1 h-3 w-3" />
                            </Link> : null}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
