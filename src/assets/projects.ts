import { yellow, blue, orange } from "@mui/material/colors";

interface Technology {
    name: string;
    percentage: number;
    iconUrl: string;
    css: {
        [key: string]: any;
    }
}

interface Line {
    line: string;
}

interface Project {
    id: number;
    title: string;
    image: string;
    gif: string;
    videoLandscape: string;
    subHeader: string;
    description: Line[];
    descriptionMobile: string;
    url: string;
    techStack: Technology[];
}

export const projects: Project[] = [
    {
        id: 819749188093,
        title: 'Pearl Box',
        image: '/images/pearl.png',
        gif: '/backgrounds/pearl_mobile.mp4',
        videoLandscape: "https://rr2---sn-vgqsknse.c.drive.google.com/videoplayback?expire=1692489948&ei=rC7hZOWjOe3c-LYPk62QqA0&ip=68.43.120.181&cp=QVROVEVfWFlSSVhPOkJ1UlRCUVZJSENWNTAta29uU2M1c3MzdU9MWG5sdDB6MXAwWHdpb21GOFk&id=2ba4a8745aa93a8c&itag=22&source=webdrive&requiressl=yes&mh=1z&mm=32&mn=sn-vgqsknse&ms=su&mv=m&mvi=2&pl=23&sc=yes&ttl=transient&susc=dr&driveid=1mOacMnwfq-STAISkC16SYZIscIm3zlhK&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=39.055&lmt=1692479055041603&mt=1692478848&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIgaW0DLirWRd-0Pg3jBmWHkCRwoGLyow7_RXxsEceJ3OMCIQCIaINDKS5ev3tE3kKu4U8OidltUTK2h7qAJHZC9NA0Eg==&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc&lsig=AG3C_xAwRQIgTXMfj2Lso-qWjDSevHLogyNIcsWOdG4GHWyvZic05CMCIQCaJkp01yi0x-7lZXtgPKWrZbWuNZCqhKRklwUT8THFFw==&cpn=BEi9q0YOriGZ461W&c=WEB_EMBEDDED_PLAYER&cver=1.20230815.01.01",
        subHeader: 'Unveiling Pearl Box: Where Technology and Curiosity Converge',
        description: [
            {
                line: "Pearl Box emerged from a fervent ambition to cultivate a thriving space where science, technology, and personal growth converge. As a technologist on an unwavering quest for knowledge, I set out to build a platform that not only encapsulates my journey but also serves as a beacon for individuals aspiring to curate a life illuminated by innovation."
            },
            {
                line: "The driving force behind Pearl Box is the recognition that every insight, every breakthrough, and every learning experience contributes to the tapestry of our technological advancement. This platform is a dynamic catalog, meticulously documenting my path through the tech landscape – a journey marked by discoveries, challenges, and endless exploration."
            },
            {
                line: "With Pearl Box, I extend an open invitation to fellow technophiles and explorers. Together, we delve into the latest trends, celebrate new achievements, and embrace the power of continuous learning. This project encapsulates my commitment to growth and my desire to create a digital haven for those who share a passion for science and technology."
            },
            {
                line: "Welcome to Pearl Box – a testament to the fusion of innovation and personal evolution. Join me as we curate a life worth living, fueled by the remarkable world of the sciences and technology."
            }
        ],
        descriptionMobile: "Pearl Box was born from my passion for technology and the desire to curate a space where science and personal growth intertwine. It's a repository of my journey as a technologist, a place to capture fresh insights and knowledge. This platform invites fellow explorers to join in, as we navigate the ever-evolving tech landscape. With Pearl Box, we celebrate breakthroughs, share discoveries, and embrace continuous learning. Welcome to Pearl Box – a dynamic fusion of innovation, insight, and endless curiosity.",
        url: 'https://www.pearlbox.co',
        techStack:[
            {
                name: 'JavaScript',
                percentage: 92.4,
                iconUrl: 'https://www.svgrepo.com/show/303206/javascript-logo.svg',
                css: {
                    color: yellow[500],
                }
            },
            {
                name: 'TypeScript',
                percentage: 2.0,
                iconUrl: 'https://www.svgrepo.com/show/354478/typescript-icon.svg',
                css: {
                    color: blue[700],
                }
            },
            {
                name: 'CSS',
                percentage: 5.0,
                iconUrl: 'https://www.svgrepo.com/show/452185/css-3.svg',
                css: {
                    color: blue[500],
                }
            },
            {
                name: 'HTML5',
                percentage: 0.6,
                iconUrl: 'https://www.svgrepo.com/show/353884/html-5.svg',
                css: {
                    color: orange[700],
                }
            },
        ]
    },
    {
        id: 819749188094,
        title: 'Credit Zen',
        image: '/images/credit.png',
        gif: '/backgrounds/credit_mobile.mp4',
        videoLandscape: "https://rr3---sn-vgqsrnes.c.drive.google.com/videoplayback?expire=1692490116&ei=VC_hZPbTK935-LYP2vCm0AQ&ip=68.43.120.181&cp=QVROVEVfT1FPR1hPOkJ1U0tUTlRJSENWNTEtY2xsU2M1c3M0bEdJVm5sdDB6MmcyVXVpb21GOFo&id=fcf60c8f7e237525&itag=22&source=webdrive&requiressl=yes&mh=pj&mm=32&mn=sn-vgqsrnes&ms=su&mv=m&mvi=3&pl=23&sc=yes&ttl=transient&susc=dr&driveid=1yHYEwwwelGvyjV7lDUFtNjPQKgvr-xKT&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=33.576&lmt=1692479307200691&mt=1692478848&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIhANemMYKD0V-sPPHsS052D5UBKBAom9vXu7CdWXJ5lCf_AiAGvhtrEN2VuyxRoMtMVMheCA3Dbu3Y0XAB41zECHpF8Q==&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc&lsig=AG3C_xAwRQIhAIp_d-fLwtQZBgnh4nHRjQLPaqeA3NKNpse9TEwB1lTrAiAIPfF8c_Opt4bsGlVGlq9-PvewxIfqudXxPcUgU77brA==&cpn=oFUNaaRuLvf5KuYK&c=WEB_EMBEDDED_PLAYER&cver=1.20230815.01.01",
        subHeader: "Elevate Your Financial Path with Credit Zen: Empowering You Towards a Brighter Future",
        description: [
            {
                line: "Introducing Credit Zen – more than just an app, it's your gateway to financial empowerment. In a world where financial literacy gaps persist, Credit Zen emerges as a beacon of knowledge and progress. Developed against the backdrop of limited financial awareness, this app is designed to illuminate the path toward financial well-being."
            },
            {
                line: "As the founder of Credit Zen, I recognize the disparity in financial education and the profound impact credit holds in today's Western society. With growing awareness of these realities, I embarked on a mission to create a technology-driven solution that transforms financial outcomes."
            },
            {
                line: "Credit Zen transcends credit repair, focusing on holistic financial understanding. Seamlessly blending ease of use with comprehensive educational tools, Credit Zen equips users with the knowledge to reclaim control over their finances. It's not just about repairing credit; it's about enhancing lives through financial empowerment."
            },
            {
                line: "Join us on the journey to financial enlightenment with Credit Zen. Empower yourself with knowledge, navigate the complexities of credit, and build a solid foundation for your financial future. Let Credit Zen be your companion in the pursuit of financial serenity and success."
            },
        ],
        descriptionMobile: "Credit Zen is your guide to financial empowerment. Developed to bridge gaps in financial literacy, it's designed to light the way to financial well-being. As the founder, I recognized the need for better financial education and the impact of credit. Credit Zen goes beyond credit repair, offering holistic financial understanding with user-friendly tools. Join us in the journey to financial enlightenment, building a solid foundation for your future with Credit Zen.",
        url: "https://credit-consultation.vercel.app/",
        techStack: [
            {
                name: 'JavaScript',
                percentage: 95.9,
                iconUrl: 'https://www.svgrepo.com/show/303206/javascript-logo.svg',
                css: {
                    color: yellow[500],
                }
            },
            {
                name: 'TypeScript',
                percentage: 1.4,
                iconUrl: 'https://www.svgrepo.com/show/354478/typescript-icon.svg',
                css: {
                    color: blue[700],
                }
            },
            {
                name: 'CSS',
                percentage: 2.5,
                iconUrl: 'https://www.svgrepo.com/show/452185/css-3.svg',
                css: {
                    color: blue[500],
                }
            },
        ]
    },
    {
        id: 8197491880986,
        title: 'ThreeJS T-Shirt Studio',
        image: '/images/tshirt-studio.png',
        gif: '/backgrounds/tshirt-studio-mobile.gif',
        videoLandscape: "/backgrounds/tshirt-studio.mp4",
        subHeader: "ThreeJS && ReactJS ? Powering Retail : ' ' ",
        description: [
            {
                line: "Explore the T-Shirt Studio, where React.js powers a world of customization. Our website offers a unique T-shirt design experience, brought to life with Three.js for captivating visuals. Seamlessly integrated Stripe ensures secure transactions, while content management through React makes your journey smooth and stylish."
            },
        ],
        descriptionMobile: "Explore the T-Shirt Studio, where React.js powers a world of customization. Our website offers a unique T-shirt design experience, brought to life with Three.js for captivating visuals. Seamlessly integrated Stripe ensures secure transactions, while content management through React makes your journey smooth and stylish",
        url: "https://threejs-shirt-editor.vercel.app/",
        techStack: [
            {
                name: 'JavaScript',
                percentage: 95.9,
                iconUrl: 'https://www.svgrepo.com/show/303206/javascript-logo.svg',
                css: {
                    color: yellow[500],
                }
            },
            {
                name: 'TypeScript',
                percentage: 1.4,
                iconUrl: 'https://www.svgrepo.com/show/354478/typescript-icon.svg',
                css: {
                    color: blue[700],
                }
            },
            {
                name: 'CSS',
                percentage: 2.5,
                iconUrl: 'https://www.svgrepo.com/show/452185/css-3.svg',
                css: {
                    color: blue[500],
                }
            },
        ]
    },
    {
        id: 819749188014,
        title: 'Apple iPhone Clone',
        image: '/images/iphone.png',
        gif: '/backgrounds/iphone.gif',
        videoLandscape: "/backgrounds/iphone.mp4",
        subHeader: "Unlocking the Power of ThreeJS at Work",
        description: [
            {
                line: "Experience the immersive power of Three.js on our iPhone clone website. This cutting-edge technology brings our replica iPhones to life with stunning detail and interactivity, offering a truly captivating digital experience."
            },
        ],
        descriptionMobile: "Experience the immersive power of Three.js on our iPhone clone website. This cutting-edge technology brings our replica iPhones to life with stunning detail and interactivity, offering a truly captivating digital experience.",
        url: "https://expert-succotash.vercel.app/",
        techStack: [
            {
                name: 'JavaScript',
                percentage: 57.3,
                iconUrl: 'https://www.svgrepo.com/show/303206/javascript-logo.svg',
                css: {
                    color: yellow[500],
                }
            },
            {
                name: 'CSS',
                percentage: 40.8,
                iconUrl: 'https://www.svgrepo.com/show/452185/css-3.svg',
                css: {
                    color: blue[500],
                }
            },
            {
                name: 'HTML5',
                percentage: 1.9,
                iconUrl: 'https://www.svgrepo.com/show/353884/html-5.svg',
                css: {
                    color: orange[700],
                }
            },
        ]
    },
    {
        id: 819749182424,
        title: 'Pearl Shop : E-Commerce',
        image: '/images/e-commerce.png',
        gif: '/backgrounds/e-commerce.gif',
        videoLandscape: "/backgrounds/e-commerce.mp4",
        subHeader: "Pearl Shop - Pay W/Stripe!",
        description: [
            {
                line: "Explore the Pearl Shop – a technical marvel crafted with JavaScript and Next.js. This cutting-edge e-commerce site seamlessly integrates Stripe for secure transactions and leverages Three.js for an immersive digital experience. Content management made simple with Sanity, ensuring a seamless journey for every shopper."
            },
        ],
        descriptionMobile: "Explore the Pearl Shop – a technical marvel crafted with JavaScript and Next.js. This cutting-edge e-commerce site seamlessly integrates Stripe for secure transactions and leverages Three.js for an immersive digital experience. Content management made simple with Sanity, ensuring a seamless journey for every shopper.",
        url: "https://pearl-shop.vercel.app/",
        techStack: [
            {
                name: 'JavaScript',
                percentage: 63.4,
                iconUrl: 'https://www.svgrepo.com/show/303206/javascript-logo.svg',
                css: {
                    color: yellow[500],
                }
            },
            {
                name: 'CSS',
                percentage: 26.1,
                iconUrl: 'https://www.svgrepo.com/show/452185/css-3.svg',
                css: {
                    color: blue[500],
                }
            },
            {
                name: 'HTML5',
                percentage: 10.5,
                iconUrl: 'https://www.svgrepo.com/show/353884/html-5.svg',
                css: {
                    color: orange[700],
                }
            },
        ]
    },
    {
        id: 819749188095,
        title: "Cosmic Gems",
        image: 'images/cosmic.png',
        gif: "/backgrounds/cosmic_mobile.mp4",
        videoLandscape: "https://rr2---sn-vgqsrnzz.c.drive.google.com/videoplayback?expire=1692489925&ei=lS7hZK2xNLSIlAeg0pfADQ&ip=68.43.120.181&cp=QVROVEVfWFlQRlhPOkJ1UlRCT1NJSENWNTAta21rU2M1c3MzdU9KVW5sdDB6MXAwVnRpb21GOFk&id=831bbc8211313421&itag=22&source=webdrive&requiressl=yes&mh=yT&mm=32&mn=sn-vgqsrnzz&ms=su&mv=m&mvi=2&pl=23&sc=yes&ttl=transient&susc=dr&driveid=126lCt2fYUvNa8VmWIr3zwMeOCcug1iGw&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=48.692&lmt=1692479104221587&mt=1692478848&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgZ3gz6Fl_9pJQQabOZKDbBfEAVZDWz9yf6SiDZmeRCb0CIFacrr6d2p0feo2np1lqbK30CnYAxU4CugmVn-xIfndz&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc&lsig=AG3C_xAwRAIgSUQwEGdcKSyHmMUoMUkiy8MLL6dyfximzNtCGaYJUHICIC56bqD_N9zR69JasPjfUG641ktT7DgVxW0uwwFBD7kk&cpn=EIOIRShkh6-ePX5H&c=WEB_EMBEDDED_PLAYER&cver=1.20230815.01.01",
        subHeader: "Cosmic Gems Reality: A Proud Milestone in My Programming Journey",
        description: [
            {
                line: "Embarking on the creation of Cosmic Gems Reality marked a defining moment in my programming odyssey. This project stands as a testament to my growth, my tireless dedication, and my willingness to venture into uncharted territory. As I navigated the intricate realm of web development, I embraced challenges and emerged triumphant, crafting a portfolio site that encapsulates my progress."
            },
            {
                line: "From the inception of the idea to the final deployment, every step was a profound learning experience. Embracing Next.js and integrating diverse libraries deepened my technical prowess, enabling me to build a dynamic and immersive platform that resonates with the essence of Cosmic Gems Reality."
            },
            {
                line: "Though time may have revealed aspects I could refine or enhance, my pride in this creation remains unshaken. It serves as a tangible testament to my journey, encapsulating the lessons I've learned, the hurdles I've surmounted, and the creative potential I possess."
            },
            {
                line: "Cosmic Gems Reality may have evolved since its creation, but its significance remains unwavering. It's not just a portfolio site; it's a marker of my personal and professional growth. With every glance, I'm reminded of the strides I've taken and the possibilities that lie ahead. Through challenges and triumphs, Cosmic Gems Reality remains an enduring source of pride, inspiring me to reach new heights in the vast cosmos of programming."
            },
        ],
        descriptionMobile: "Cosmic Gems Reality embodies my programming evolution. From its inception, I embraced challenges to create an immersive portfolio site using Next.js and diverse libraries. This project mirrors my growth, encapsulating lessons learned and hurdles overcome. While it has transformed over time, its significance remains unwavering—a symbol of my journey. Cosmic Gems Reality fuels my drive for greater coding accomplishments.",
        url: "https://pearl-tank-cosmicgems.vercel.app/",
        techStack: [
            {
                name: 'JavaScript',
                percentage: 82.6,
                iconUrl: 'https://www.svgrepo.com/show/303206/javascript-logo.svg',
                css: {
                    color: yellow[500],
                }
            },
            {
                name: 'TypeScript',
                percentage: 0.7,
                iconUrl: 'https://www.svgrepo.com/show/354478/typescript-icon.svg',
                css: {
                    color: blue[700],
                }
            },
            {
                name: 'CSS',
                percentage: 16.7,
                iconUrl: 'https://www.svgrepo.com/show/452185/css-3.svg',
                css: {
                    color: blue[500],
                }
            },
        ]
    }
]

