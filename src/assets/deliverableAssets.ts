import { Item } from "./solutionAssets"


export interface Deliverable {
    name: string
    detail: string
    feature?: Item[]
}

export const deliverables: Deliverable [] = [
    {
        name: "Project Plan",
        detail: "A detailed plan outlining project milestones, tasks, deadlines, and responsibilities.",
    },
    {
        name: "Website Design Mockups",
        detail: "Visual representations of the website layout, including homepage, subpages, and key features, to finalize the design before development.",
        feature: [
            {
                name: "Wireframes",
            },
            {
                name: "Revisions",
            },
        ]
    },
    {
        name: "Responsive Website",
        detail: "The fully functional website built according to the approved design, ensuring responsiveness across various devices and browsers.",
        feature: [
            {
                name: "Responsive cross-device compatibility",
            },
        ]
    },
    {
        name: "Content Creation & Integration",
        detail: "Compelling and informative content for various sections/pages, including practice area descriptions, attorney profiles, blog posts, FAQs, case studies, and legal resources.",
    },
    {
        name: "CMS Implementation",
        detail: "Integration and setup of a user-friendly content management system (such as WordPress, Drupal) for easy content updates and management.",
        feature: [
            {
                name: "User-friendly",
            },
            {
                name: "Content management",
            },
        ]
    },
    {
        name: "Client-Centric Features Implementation",
        detail: "Integration of online consultation booking systems, client portals (if applicable), contact forms, testimonials, and downloadable resources.",
        feature: [
            {
                name: "Client Portal",
            },
            {
                name: "Downloadable Resources",
            },
            {
                name: "Scheduling",
            },
            {
                name: "Testimonials",
            },
        ]
    },
    {
        name: "SEO Implementation",
        detail: "Implementation of SEO best practices, including keyword optimization, meta tags, structured data, and sitemap creation to improve search engine visibility.",
        feature: [
            {
                name: "Search engine visibility",
            }
        ]
    },
    {
        name: "Security Measures Implementation",
        detail: "Integration of security protocols to protect sensitive client information and ensure compliance with legal data protection standards.",
    },
    {
        name: "Analytics Setup",
        detail: "Configuration of analytics tools (e.g., Google Analytics) to track website performance, user behavior, and engagement metrics.",
    },
    {
        name: "Legal Compliance Documentation",
        detail: "Creation and inclusion of necessary legal documents such as terms of use, privacy policy, disclaimers, and compliance statements.",
    },
    {
        name: "Training Materials & User Guides",
        detail: "Documentation or training sessions to familiarize the law firm's staff with the CMS and website management.",
    },
    {
        name: "Testing & Quality Assurance",
        detail: "Thorough testing of all website functionalities, ensuring everything works smoothly across different devices and browsers.",
    },
    {
        name: "Launch Plan",
        detail: "A detailed plan for the website launch, including backup procedures, final checks, and deployment strategies.",
    },
    {
        name: "Post-Launch Support & Maintenance Plan ",
        detail: "Outline of ongoing support, maintenance, and update procedures for the website.",
    },
]