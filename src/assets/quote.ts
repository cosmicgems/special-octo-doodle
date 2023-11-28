
interface LineItem {
    name: string
    detail: string
    cost: number
    additional_information: string
}

export const quote: LineItem[] = [
    {
        name: "Basic Website",
        detail: "A simple, responsive website comprising essential pages like Home, About, Contact.",
        cost: 500.00,
        additional_information: "Includes design and functionality.",
    },
    {
        name: "Blog",
        detail: "Integration of a blogging platform within the website.",
        cost: 250.00,
        additional_information: "Setup and configuration of a blog section with necessary features.",
    },
    {
        name: "CMS Implementation",
        detail: "Content Management System (CMS) setup for easy content editing.",
        cost: 500.00,
        additional_information: "Installation and customization of a CMS for site management.",
    },
    {
        name: "Client Portal",
        detail: "Creation of a secure area for clients to access specific content.",
        cost: 1000.00,
        additional_information: "Development of a login-based section for client-exclusive information.",
    },
    {
        name: "SEO Implementation",
        detail: "Search Engine Optimization (SEO) setup for better digital visibility.",
        cost: 1000.00,
        additional_information: "On-page and off-page SEO strategies and implementation.",
    },
    {
        name: "Analytics Integration",
        detail: "Integration of analytics tools for tracking website performance.",
        cost: 250.00,
        additional_information: "Setup and connection of analytics services for detailed insights.",
    },
]