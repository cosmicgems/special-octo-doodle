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
        image: 'https://lh3.googleusercontent.com/pw/AIL4fc8Sq97bnSpFafHIqYWp7d3UQgak9L8Cqra4o2Dbd0Z3rji5TIkRbRY4geGCTAQrvrF-lDxuqHWAZjxHzCfGS-gTmmahM0PUF25_nhGEtgwDazbCA8lyGozZnYhEPs1XFNo7NRsqSzYVXXSkDuRQXR1U4lZ_GpvXftipXX7xwW40D4QJS2p-0bZFo8j0lxA3fRK5hL9Edb7McW04aLK8PkH1RbgyAr_vjmCq0ttZ4PSN8RgJrXVevxpycPGlhKRPePUkIsrkxOYxf2GaWvw_HfFuT-ORK4kvQ1fBB8Q_sMU1pC599EAx4FA5BijaXQX_l0CHuhJE_-8cn8D3GRtcfPMJhBEdgUb3jK1M1vSEW2uzI2heZO5Pa-blj-cqqyq7aD3hekXph9oV1RqUzgoNXOeFCDGSA6vS0O3r6lICzrjeBKWs1k_gH_Gq4Uk4eIGkPBcZyo-7q5o4ZEa8d_doFBCe1Ztxi0w6lYGhB2f-KCRlK9r1tKzhYO59dcEc6Js5fN6DalFYf9UOYxtVDznYATm2zpgA7aTqNg3b9gQL3GSWR7smmZDpeNjD9we1jycAdnetzAPpPj8e2g9figbLiXWbHrfeHX9B9FECCouSD35t4YlkkMohobT-zKO602fUT6yLo4zkEZ6LdFj5PAggFkdf35ouk8SK6ETdGfV0xJs43zpoutl7bbKNdnDuFwQdyd2jdcJnAR3Pbl6GahU810tRttsSTkgoSPxnJL3w8GaI-wOd9IvQbE5GQ0XpGdNK2RM6WgsEkCfXz1dyxb2t2rCCCesnQ5vUTOIbahO0PgHt9CagszHY3UjF-5PDs6eujfFlJd4re7EILN1-UD7yrju8R6CpzG3gNZQqL93j4JkSxCjMNipNzXL1LnGLNmTHlVXUL24SpQU-HMI8gctMCxrfJakhA9BwgvJrEz-e_stBtz0m1CapeMwytRmkr72NxFkxxUDG0qqkKyckQVfzITD13t9wBYrAgbHWAKBEJYwB_pWqzaq6Klq8GW5LXavoj8m3fZ4JXX4dC5oILUx9bnBJIttNRqLM8AA=w938-h472-s-no?authuser=0',
        gif: 'https://lh3.googleusercontent.com/pw/AIL4fc82uefdSCXcClHDlPYDjmDilWR79VPA8CBF7HZ0scdyTmDTpcqXc5QGXthCknisggPjxY8UniCpOyjDsBhrOlYnIyvrU3SWl8k6GZg5BGsRr-laLrjsRBTBvIxoQAQ29625YYHRbRx1q_Qp2wzIKjH1pY71k7GLKDtiLZ71wU4WjKfwSH1GYvEy0zn-cw54NA8J36PQDsLhv9ZffEzWeW2jEGLv2B5v55CmjX3g_eD3dxGMNjTPLxm0urDgvUiuCdV9F0in3jUX7OJ3v_n0fvJRk9BUOxYVB_lFH4HbprugX-hmuP01-5CHjYDWMf4zf2GPgx7l_Q6ZAAr6HWWU-xA4MNlopw6Q8xpfZ-CA8bDCXpaGh-TKGB8Yvm23tGg8GxJineBPS6H_RKHdOZpSeeqehD0isn5s5zcv4oD7XOMgOGm0LCamiXBjSlvdJ_VXSYv8KsHbPV_rKoSpkoSIekxw0MnbrB27xqziMXJFFOHuOxtSecPfIUN2gDKdZAPqMOxXNDY7Ih6NAUCveN2uAnTqL_6ToX87K6cwPw4aJIPSV02KuNL4YGB6XMFmbK3O3f1JoHsgXSbE9OizrE0gohqTwariAJOIrrVAaNt9CfcKYIYsDfZjLNpgAVhhhNNuOQKIkdoZXiNLdi5mHxBsgVYXBWQGfujOoxxXN1fcs3aJF6Q5RLo_O44uCai3cp18122E3-9lGctJJQIy9VUBZ3zADDTIHK77aeDqMZGh8-Qu0TFk7xw2WhZTG3RWZkL0wON8L6o4O1MPfaOdAIqir_-vTtyhPayEzbit4sp9UN0jrj56f5nat7IZEpHgGaFC6kuUfoosUKSORL1KP0On7EL_oFPLkAV5IE7xlPFlHaxeK9lkxvLbRGZxcMbx_-DUDvfARYiBnQ9wTuO6n7BIeuJsn4sHeWbpyZj9vGEdtBtsGcRaoCQVINWwxD0UNqoIfRzIARNasYSYlxkGxsrZ-C2Cbya3djIYKe7na4smHSXyMGMzFNXDPeAam5jwinX7AUUaT6IGksbA204v0qyizGA1hN5l53CqxvE=w146-h260-s-no?authuser=0',
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
        image: 'https://lh3.googleusercontent.com/pw/AIL4fc_aq-dXV62QpBpC9dR1xjUPwJipth4bqIhFxaxMODw_ITuIW3mFtDM9FN0kDmdl00zPz1bya_VPsQ-mLRpZ-ZhzP5wHof5fCw7o5O7yDc-yFAki3ImUqLVjbxHRyNoJbYMrCQLxN0CD9S5-_Gbj91-BC1g0bSiJgqbdcD_FK0PrUgoB5GoOJGSrCYpjuSjXytBNF9oAVHmpH7qeg8wTvG1fvllOPgIJWlowHePNc1ZZ5ii-hf6g-i-tDyYlZ7ujmjNo7123fL-3rUr1kqnbS0yp1rw-rZ5XtxxpYaxCgaVVBRpIoc95jIkS17DdVAnWQd8WzSfvxePvlNUEPxhKXn4hj_EXAH54jjUHkNNrlxn8jssA-QpjYF-j0dmbeqTroBdkPvQZd-iafkSvVzTP2j51pZ3G3hjIsX4lThd21nfpxwf7REog3tGAt5T5zraVysjyRd6eBlaVzR3WSWnJBD-KJHce6_cPEc4VOJbKFnvcRF64knstKWJY3PTiYG2Jh8vbunF3v1GvAUNKRgUNBJYEJRKD-055ez0J9pfpIg45wbfjBHkuMcEcUlrGKz4QnFsADQ09-nPYLtUWO4OpFWPrt5vzddZFkkui5AkDp2nySUJHEdZTmEKRFKYAc1H62cF3RNHe-sJ6lCg40d6heqYy7WRL7zPDoh3KcATtvesirXqi-5MIXgMTCSVF1cBlFVK_zSMos_9uhp2hbo9Tl6V5UWtvr3nA1LjNbN7vCqQdzexeOFa5xlWV28Ed5YIBu2P3eGljHDTeCly1wuQgD75opZnyx_ZmDnG0Ps5Uyhbg7S5eoJahUzWcP3eITM32IOWlWZEu0TUW63sjMp3L4jqfSq1tXTueuapLeV8A6hcMUmeh0dGj_yjXM3OBX7KfSn7la234UQyG1qvLpJFuXhjhjgRaHep6BAhDkYCoJgcRIV16G10OR5vCGyhcSFNK9iUdsPueSAgnwOSTYijzQvAP6sqfbPMf1v9dnzbpLGHI28sZjcTSkZPiT3N84zkU5Z3rkLto_HepmegBKEnc_BO1X2iBoH2GqrU=w938-h469-s-no?authuser=0',
        gif: 'https://lh3.googleusercontent.com/pw/AIL4fc_RBbegc15HcV2oIhU8gQfE84hFqOQ1jPL76dX-ZUSMZUWHvfUZwLyjGTCrO6qAop8ARkNOuZdhEARs1KkOFrsy0Y6usx3OgqmLfR_PBbC3a7uSYAf5_tmpiirayi9QFrGas3hGaCAJBC3iRwMxpnNyMNySuQCyOc8u4OVBcPOIgUq2nSml2SYOvklPKQxj4Q7hFAKXiMLZazDjNu_1G1s8tixYFuySXlhBtl1lVilz23pD3h8rcY38uNeqHxJFNiDA5ruhBPVdu82OoJU_mQWUKjsNwNPc2WrkIhLiT0icD5AH3A3Ox_NwofIuhA555fkGbNsAn7YS9ax8ZT4gqjEjIzfg_DrRqmfe9Q5BAmLTzj5LvAuFYCTY9ZB2lCYQMUuMwIdB5BYRgRbYJe9zo0zJuUf31QPCpAWr9kOV20qsT3JMU54aaMta-k56qtLsEF-s3kFu7VoBnDXHGi7IOIKczroDQKoXA_ocBb6WpvCaU73cXXkzhOHHCBFGMyYZD1WN9i05fuR00vVe-mnZ6QGHBSNy08GEcxqq5TNF2yMIjBNnJzYGVs67E7oG_i_XybzptbsQyE1_t6RqJOdfLfWAMulFNACcdI-apdc9jH2fC5Cm0ufofk--GaU1EPW0D7PnaQ34P3W_La-X0HPpLa2tbyhQmOeMBU8SxAEQWo7ggq0QmU32zmbcURAhy6PQIIHSHc6eaDYF2fRIfmvp6Ki1j4Vxzx6ixDsPjU91kxcPeb1jVCKnyoTxkq7Jes-h4LEXchXXVQJR8aNKg69zKk5CgbJAop-lGtgA0nD0nki-mvFrPuD_EzQDbXTgzlgwkCjFlQngXx9ssFJoiQhvKRoZTexY1WvARsWr6m9w3tF8AKJtFmrqNHWr-0-4yOgWW-McsOXWjZCRonFFLGqDXmYwuJX6wKQMIwPTReJ0sLDlChJY-gL5iKv_QdCZhB7G3mYFK2Ja0hJnxbEzxPhlk4HVBL_zstB-N7qnIySvsGs-EX41U0og7395kKiJ6hnlzzjCbVWwPERzjDE8xaXsFgHfFkWT7tms1z4=w146-h260-s-no?authuser=0',
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
        image: 'https://lh3.googleusercontent.com/pw/AIL4fc9MJQsPASWl_mKyWcaNv-r6y-DPIgeN-zZeGeguYQ7vlKh7dwfeGRnXfI1WYIRPiqOi6_2xZRQI8jZrpRVyiBaFUm9KiMqoJOKlGGuwm0N8wi8tLndmccXU7Uj1UJ8jS-hxGa3NgxZaR5-MrBejFRBe4vCysyd3csbFK9J5ns2zdJPrgGnlJwpcE-c700jH9_kV8Zz-F3iQsVineWxcbvVANSvFN3nVbcsERKz1SyOlwUdmsuGFNLRfuPO1W6zjtl4amm1hYKQnJ-6MvVPLIlVl14uBW-1cbrWgOGVDLr_kW2CCfVnhfm2Gxg8VYxFUCzp7_fzB-JZW_WBGO_DoF3XnUhjaEKxQZaKgHHCFSN4TcB2yasLJp0quPiBmKAVdeQwgBapxB5qe5eQA8Q4esrjsLANZCJVFZSFiDaaYbdvjyY9zewXfFBMWZOhZ5xzAFk9Jjqd1rgXVzaWZ6HuMrYiHnHfdCcRDg9So5T_Bt1weTd7b43auWTcTWKHdQnUV4DKehOgsxCCPMyiUSCfqrj119QwM7qJURouk63VFLaMr_QhQFlJLPwjf-goem9ODg0G5TtaFxxCI-uJyGYWO85rw82WMuqVswUek7eSCcZC9oU1dD_N7Ju-xTKIRXDo3iMMnIRU8n4g43l0-WSLddCis95dRZ-Tl4whsnBeYDGF-bMMGBVbID7G2O8n0Wj37Tf00usHSOw5RsSUPuLZ1aVAo2Sq82xxXQnUMmu7_MhqiAB-8xR9nu-eHp7LL7yYnVERxWTMa6pN4Apk7jiLIICql0GVSSHE1wyo6wRDBTvSdRsQDChq1p3IpQhQ8AyAYidpEDmyG9k7qL3a5ftIa_dcF0x9vMm_svGv9OntNWOtL9NEQDTm0aJuqS850RIcFZZapZupdm-ygNITZ_b8M3diGssvT_-xY2N_LyQLTekfnWI2Ps7KebrZO3X1AwqSFDcOVuJpZgW6T3OZ5vOIOV5BZ11WBRHpd1yzjL3B8i3iMGsfDSOHiDwUDENA3jBKTuylstXJVxUheygzSAGhOr-Wp5b682tvrazU=w1919-h963-s-no?authuser=0',
        gif: "https://lh3.googleusercontent.com/pw/AIL4fc-_WRpVdZ67fIRv_ORclCTOy6VCXO-PX7UxyRIdZmTq4OG6WCeyMU9MJkiHMZi2rT8oBS82k4mnEaCp7W9bOpVDkAH3SAXV6Qr7gTHs7iac5SIw6mAxV_FaIK7rxiJ9z8NAqVB_q_EfHweLaLf1R5flSXtwl7iW02LwEEQD3ig3GkHMScbwZ-lQUvCFOBmc482Pwe3z7JSMC0IVfmstkSaujWyrJZTE3EQb1sypJvX3GIqK391Nb0b0nm-1toRo7e6D30-VltUg4ZqzNsD0V3xjhYmcSJybEYgeMOEgFkYobhO9CtSdhvkoeTFm0pLna034yI9yx4wN4i7EOwScQ27y48qb1FJccONuVPD_iQ_OviDIoA1zBBvTls8tmEmSZS5JyXR9nhG32pJWIpSZJ9X_3Gz5HpjU28NuHMac-mP__uIYCEJIvECQRbxoIFP9AQC1JlLf-dA1iWdXJgRVZuBufF5ra7glfRQs9LvfyQD9o5jnEHnVcXarttgAX4JqniC64qCpSOC01uoDFT2eVj3CAbN6LKa2NXZE-1tJ9pCK9u2L_QeDS_KYYHrpXBs4kuCBCxHAoWh59X6bh9-xuoiPZY1XPNH50WJBrooNS2C3q8EwCvcmAIG9TDIfu3Rfi3WqlejILxgzQHLZLVuw9cNg8z5g6O7uskAQ-h_z2RRTxDslHAPHkfjFwGNtqNC9NKWWZwJeRoEnJFwcZ3RHX6lPi0O_UxhTVnGXFexBlMUZYPgcAV28yq67vOZfuHERbxiy8FuWaHh1nLTWFP-2Ra-VbNals0ZR1kZIuSXaj4rab_qiNkfcvQm54wAGfJaB7NEH-vkMMD87AYo8jd4Jrl2MsRowNXLwMhd4tkvtvobTqf6gA3JdusYUxvsxLDegeOsLflmYUG-Gtpq841VueS-IHkQyEXOaTWcTCwGuF9_2O9rrjOlcQN_L4G60lDfFw7c_7pJZWx09Dk-E4l1b1iUz83-j6pv99vSTEF1R32rMpN6tYiWd6iRhbLd4SBP_f-Bous-9dfwqca7hjC5cHLqrSKkjg6GgBek=w146-h260-s-no?authuser=0",
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

