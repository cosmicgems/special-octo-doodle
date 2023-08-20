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
        image: 'https://lh3.googleusercontent.com/pw/AIL4fc9rEruN8V5ppBXSm3TIkfvAYzTXQ6eUP9MMMo7LAwNI_unIYBCPlj3DP4Fjn3i164e9luJXXvwlY3lyO-8uZW3C_rCPlI59AvDpNWHxgqhbYN1EoEdPgqztlw4T8gTHUFBotXqOnBzmwTacDg7X9ILN056pQBNpTXoWcM5o9uO_LroSPgGr_5hwfZtQNbABDkDjALDl_hOCjZ0KXlRelFtkiFdji014GwbbOX18h4bepkXcqhcBOdpsqCFInwU196qLRdQpOkrYKNzPJ6ewuqFKOwcP475-70scgmJvhy34sjJ-X4hbd0ddpuVDNVESndJKbV8F7BRCa2CmMhq2ikJ3KxUJJyUGFGIoSP_KtjVWz2HxRJ9NSNJ0UXS4_QYKxLt07ysStHDpbjwy4tGgjFJPnIu9x0pi9LIipD-57riGnlo_SwhLGwaSAzhz4ZLDcKyP7_YZQmmC33zCI9xj4CTF78aVe1ZJ0vf43KjC0OHsEqCM6ZLVPq6jCxDPgduGMkMqvhisRUHNms1HZUS0z8onMBIUy6JoLSgVVgzJIUkJx7UKeCU7WvIQnuHokSv0No6jQBY_dU4f3x6kwcjtiLnQBBp7aLhiSTCb4yeeuv4bWpJ0dvLXyJEuVeWhk_TVPspUV1ruogyPn_WTxBho-YMpUli1wNX2XoGXhIhyiFl_-NJMigqgPcfF24BRIGZ96SmjqWyl8RkbGvtp8-E5mixVTwv5JaMpGjGktWMdl5WOaH35oIegtSIZT88cUf6-oT6tTsZiqQg5uQcW2HF8w2-zPIROlXxq15j4vPwiNFDUygR3_hCYHh1RgMurUG2qusLxluO0HpLQfD2Tztipr6znkvngrcnQYrhcxNQOQb7vIibNFEqgB04xJ4NIm0ZWp0myKWmPJPFQdZlCd7413EHRJ5Br3tUTeew7dUEZYPhaBAIt5h2mWgUSgX75ex0V7jGLwjwKAq-3G-rryRVUQSivB7CVp1XRCrf5FIbvqBHQJuL__C4qxqqYVM3er-qAyZycJJuRFeg8OAWY-TsbLxV28OG48kJxGe4=w1915-h963-s-no?authuser=0',
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
        image: 'https://lh3.googleusercontent.com/pw/AIL4fc_nCPC_hhl5WjZebkiTEJPuBXEpJOK8K8hfjRDcTExG_xHqBm211RcDM6S9eK-_hXjABFmbA-CgfKO5pzEPiB2-M0SJigj_PWle1PCL6-JVwsFCDw_IQ1Pfs9fAJh26blAvbD1qdMldMs8kir5GLb6B3lnaI9kVH7Drkm9J9lVaiisX1Cr_gIST6V2TolXjNkFB91rdQc7GymZBIcfM1BN6QCVwFoSCmxOEe8QPNfZ7SKuSjrsbfJVSVtSJsKA6IuZWJvu-pIl0B8x0HVYt8QCXN0Z9ce6LmuJrIb_DnYYdGTe4frWJYULwa1bSQgkBZzANZl4fhGTMPvb3h73gVvuVs4gRXzQTfx04nva9eiaO6PwGegwzM1wErm1wd04fGHon1s1ZOOUEOmLKJ7W1Q525g346Tk9elBVKUWqkNMOSvMMPJWKv3ZmtvBEAoVXhvjyMre5QRBKpBAbSzTHKK52cbp9y57CoFXhoVt3Cf0v08zj8mD344VcJVmOoUCKOTV5GpY3zDG-OwqjxtfiE7NeAVuvVigcNWElkSoePQZKaJMHlGeVrvcDtLyHf9EdkqH7HsQ0yO_OSNNAB_Jkt_mFeQ4Ez81_AUKpVYE3TnTZm8xr8Pw3eY1bxDAaSUKSFzHl_WxvlIseHghR3VycerUsClcF57LaydkAY44VSemfyOofDX-OO_Y9FU0rbwzRHrgKJ1Fg0tyA8SxVOcnf_vEpRrS29qFI8zy7XXB-UvUdVS9KAwRbc8unZ6AO9YxFjeavXAuN4YUHASytwME97YxmrGfqP4fej9j0sz3MJ4X34F9KG3PNHMeoj9e8XV4qC3VxOxenmo9qF63RG-BuQqKiDjSa-MXIV5q39mcVS991ST3GLMqKELuSDKA-jzrM1-Be4GfyPaK6wQrwOdTuQLrt2NKbA5o3bvG-8MgUuHuPDGt723RhDXmx0Zr4Dtpm_0FPoy1tyaz9uyTXVnAZxqBwOPKNrakFxMMKA5j9cinOVMjxDW9V4ge4B444MTe25bvLVs4JmFd8S62P1eNIi2SN_cbJExK4XMUo=w1894-h947-s-no?authuser=0',
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
        id: 819749188095,
        title: "Cosmic Gems",
        image: 'https://lh3.googleusercontent.com/pw/AIL4fc8xneMpKrgknGD3w7cT7NVdRtl0u_blEw143jS22ggK2a2vjvaVUs4DQs2kT2B8AsrWPoULD6J9CHcx3U6d4D_m6iP3T6iVh3ejpqxDKCj60z6F9QwRsXAW7pad1txb0PLkfPJBnwGl6IE_k8hbcawvtUHtk1IxjDrNBQyxE5R6vY8L8IN17PpPSLy9eKXhgKomdqnuzf2lQvpxot97ov3n71feDg1b52oMKa29Po5LSVerWyubm65WARStKrFwq5pDrxcAMHz4K73u785hGffEaYhhnL9VgRtgpNkDZijCDlKo7csnXaSrV7Ptji367jzuJhHvoNJ_2p7W2fwcH8uxKr-ROxgSzsMWlwoYpabEyKcL9GQP80dsZ6PlN1fBShrpyNPjKed4BN1maqqzh9wN_jNVV9mztRLLaq8zfssQFYMrcTB0wxyrg_957QlOJY4_cVVS8NXthnRe7-u_V0WTl2jJPdoEkCvrjrtd-NHN6iJR2s701cOX913sBPrrJ_El5H193jqXyvie8g2aWa2GMdpBAranD84uScLawKZct7yFwKngoNS_ThUxbS2iihHu2w5TTjgzAaJ5ObDthVHh8h-lpmaQ5rIKQkyP7q3qlZKPjqsrRX0Gri659D4UH6oWd7BOnwuAqrR0b8lbfKzYorf1u81QX8sKnKLGujjBAP6sgL4MFpoEE6cf7tlS3945kiuot-DNbazDeMfm2zYfU0obtoN78x_HS-tkDcLZiFBUT0Fas2VBv5NJdpweGXgNZfIqvn-ZCCgtJC2UxcC9YdNIqYlMhe7K51srWrVD6kMjLigIaoMNHMR387pdb2N5rQKFO2iSZ38s_FEQdtQ-VkuKzgjN-TP6X3td0msaRjURJ9kwnJ4y5OMyu5fyi8pkZa14aYy2QxBnmb-Ki6K_gGnHkq1dQLAG5cw69amAzQVe1do5F8K9A1h0bpO05POSSdKCSpPf7o_oHMt_LlWhRVEn1MShpMff1OTvV9NJxZy58dObfsC9WGHkXla75cqyzqotM_D3LiMajXge15I57L51JJCCFqo=w1919-h963-s-no?authuser=0',
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

