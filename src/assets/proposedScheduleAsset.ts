
interface Feature {
    name: string
    detail: string
}

interface ScheduleItem {
    name: string
    type?: string
    detail: string
    date?: number
    duration?: string
    image?: string
    features?: Feature[]
    process?: Feature[]
}

export const proposedSchedule: ScheduleItem [] = [
    {
        name: "Revision Rounds",
        detail: "2 Rounds of Revisions",
        date: Date.now(),
        duration: "",
        image: "",
    },
    {
        name: "Revision Guidelines",
        detail: "Established guidelines for revisions to streamline the process.",
        date: Date.now(),
        duration: "",
        image: "",
        features: [
            {
                name: "Scope of Revisions",
                detail: "Clarify what elements or sections can be revised, such as design layout, content, functionalities, etc.",
            },
            {
                name: "Detailed Feedback",
                detail: "Encourage the law firm to provide detailed feedback for each round of revisions, specifying what changes they need and why they are needed.",
            },
            {
                name: "Timely Feedback Submission",
                detail: "Set deadlines for providing feedback to ensure the project stays on schedule.",
            },
        ]
    },
    {
        name: "Revision Request Format",
        detail: " Implement a structured format for revision requests. This might include using a designated feedback form or a project management tool where the law firm can list revisions clearly, providing specific details for each change.",
        date: Date.now(),
        duration: "",
        image: "",
        features: [

        ]
    },
    {
        name: "Feedback Consideration",
        detail: "Gather all feedback and revision requests into a single document or platform for easy reference and tracking.",
        date: Date.now(),
        duration: "",
        image: "",
    },
    {
        name: "Agreed-upon Changes",
        detail: "Ensure that all revisions align with the initial project scope and agreed-upon design brief. Any additional revisions beyond the scope might be subject to extra charges or extensions to the project timeline.",
        date: Date.now(),
        duration: "",
        image: "",
    },
    {
        name: "Approval Process",
        detail: " Define a clear approval process for revised elements. This might involve presenting revised designs or functionalities for the law firm's review and approval before moving forward.",
        date: Date.now(),
        duration: "",
        image: "",
        type: "process",
        features: [
            {
                name: "Feedback Submission Format",
                detail: "Ask the POC to consolidate all feedback and approvals into a clear and concise format. This could be an email, a feedback form, or comments within a project management tool.",
            },
            {
                name: "Deadline for Feedback",
                detail: "Set clear deadlines for feedback submission for each milestone to ensure the project progresses smoothly. This helps avoid delays and keeps the project on track.",
            },
            {
                name: "Visual Representation for Approval",
                detail: "Present visual representations (mockups, wireframes, or demos) of the work done so far to facilitate easy understanding and decision-making.",
            },
            {
                name: "Single Round of Consolidated Feedback",
                detail: "Encourage the POC to gather all team feedback and consolidate it into a single set of revisions or approvals. This minimizes multiple conflicting revisions and ensures a more cohesive response.",
            },
            {
                name: "Clear Decision Making Process",
                detail: "Define a clear decision-making process in case of conflicting feedback. The POC might collate all feedback and make decisions based on consensus or involve key decision-makers from the firm.",
            },
            {
                name: "Final Sign-off",
                detail: "Once revisions are made based on feedback and approvals, request a final sign-off from the POC before proceeding to the next phase or launching the website.",
            },
        ],
        process: [
            {
                name: "Mockups",
                detail: "Approval of initial design mockups/wireframes",
            },
            {
                name: "Final Design",
                detail: "Approval of the finalized design before development.",
            },
            {
                name: "Content",
                detail: "Approval of content before it goes live.",
            },
            {
                name: "Launch Approval",
                detail: "Final approval before the website launch.",
            },
        ]
    },
    {
        name: "Project Plan",
        detail: "A detailed plan outlining project milestones, tasks, deadlines, and responsibilities.",
        date: Date.now() ,
        duration: "",
        image: "",
    },
    {
        name: "Website Design Mockups",
        detail: "Visual representations of the website layout, including homepage, subpages, and key features, to finalize the design before development.",
        date: Date.now(),
        duration: "",
        image: "",
    },
    {
        name: "Branding Style Guide",
        detail: "A comprehensive document outlining the visual elements of the brand.",
        date: Date.now(),
        duration: "",
        image: "",
        features: [
            {
                name: "Color Palette",
                detail: "Defined primary and secondary colors with their corresponding hex codes or Pantone colors."
            },
            {
                name: "Typography Guidelines",
                detail: "Specifications of chosen fonts for headings, subheadings, body text, and any other typographic elements."
            },
            {
                name: "Logo Usage",
                detail: "Guidelines on logo variations, clear space requirements, and acceptable modifications if needed for different contexts."
            },
            {
                name: "Imagery & Iconography",
                detail: "Guidelines for image styles, icon usage, and other visual elements to maintain consistency."
            },
        ]
    },
    {
        name: "Logo Design",
        detail: "Creation or refinement of the law firm's logo.",
        date: Date.now(),
        duration: "",
        image: "",
        features: [
            {
                name: "Primary Logo",
                detail: "The main version of the logo representing the firm.",
            },
            {
                name: "Alternate Versions",
                detail: "Variations of the logo for different use cases, such as a stacked version, horizontal layout, or simplified versions for small sizes.",
            },
            {
                name: "Logo Files",
                detail: "High-resolution files in various formats (PNG, JPEG, SVG, etc.) for print and digital use.",
            },
        ]
    },
    {
        name: "Color Palette",
        detail: "A defined color scheme reflecting the brand's identity. This includes primary and secondary colors along with their usage guidelines for backgrounds, text, accents, etc.",
        date: Date.now(),
        duration: "",
        image: "",
    },
    {
        name: "Typography Selection",
        detail: "Selection of typefaces (fonts) for use throughout the website. This includes specifying font families, weights, and styles for headings, body text, and other elements.",
        date: Date.now(),
        duration: "",
        image: "",
    },
    {
        name: "Mockups and Visual Elements",
        detail: "Application of the brand style to mockups or wireframes of the website, demonstrating how the color scheme, typography, and logo will be integrated into the design.",
        date: Date.now(),
        duration: "",
        image: "",
    },
    {
        name: "Branded Assets",
        detail: "Creation of additional branded assets such as social media profile images, cover photos, and any other visual elements necessary for digital presence.",
        date: Date.now(),
        duration: "",
        image: "",
    },
    {
        name: "Content Creation & Integration",
        detail: "Compelling and informative content for various sections/pages, including practice area descriptions, attorney profiles, blog posts, FAQs, case studies, and legal resources.",
        date: Date.now(),
        duration: "",
        image: "",
    },
    {
        name: "CMS Implementation",
        detail: "Integration and setup of a user-friendly content management system (such as WordPress, Drupal) for easy content updates and management.",
        date: Date.now(),
        duration: "",
        image: "",
    },
    {
        name: "Client-Centric Features Implementation",
        detail: " Integration of online consultation booking systems, client portals (if applicable), contact forms, testimonials, and downloadable resources.",
        date: Date.now(),
        duration: "",
        image: "",
    },
    {
        name: "SEO Implementation",
        detail: "Implementation of SEO best practices, including keyword optimization, meta tags, structured data, and sitemap creation to improve search engine visibility.",
        date: Date.now(),
        duration: "",
        image: "",
    },
    {
        name: "Testing & Quality Insurance",
        detail: "Thorough testing of all website functionalities, ensuring everything works smoothly across different devices and browsers.",
        date: Date.now(),
        duration: "",
        image: "",
    },
    {
        name: "Documentation of Revisions",
        detail: "Maintain a record of all revisions made throughout the project to track changes and ensure clarity in the final deliverables.",
        date: Date.now(),
        duration: "",
        image: "",
    },
    {
        name: "Final Sign-off",
        detail: "Upon completion of the revision rounds, obtain final approval from the law firm to confirm that all changes meet their expectations.",
        date: Date.now(),
        duration: "",
        image: "",
    },
]




// {
//     name: "",
//     detail: "",
// },