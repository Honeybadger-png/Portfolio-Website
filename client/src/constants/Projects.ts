import { languageType } from "../Lib/lang";

export interface webProjectsType {
    id: number;
    projectName : string;
    summary: languageType;
    usedTechnologies: string[];
    githubLink? : string;
    projectLink? : string;
    projectIcons : icons[];
    mainImage : string;
    projectTexts : projectText[];
    images: Image[];
}


export interface artProjectsType {
    id: number;
    projectName: string;
    polycount: number;
    usedSoftware: string[];
    fileName?: string;
    mainImage: string;
    secondaryImage: string;
    summaryText: languageType;
    detailedImages: Image[];
}

export interface icons{
    name: string;
    link: string;
    icon: string;
}

export interface Image{
    name : string;
    url : string;
}

export interface projectText {
    title?: string;
    text: languageType;
}



export const webProjects: webProjectsType[] = [
    {
        id: 1,
        projectName : "My Library",
        mainImage: '/projects/web/MyLibrary/my-library-home-page.png',
        summary: {
            en: "It is a project I built to practice foor book enthusiasts and hobbyists while practicing Angular. I refined the scope and features of this project. At the end, I decided to stick with React and build a project with similar goals with this project I have planned.",
            tr: "",
            jp: ""
        },
        usedTechnologies: ["Angular","Tailwind"],
        projectIcons: [
            {
                icon: "github",
                link: 'https://github.com/Honeybadger-png/my-library',
                name: 'github'
            }
        ],
        projectTexts: [
            {
                text: {
                    en: "My library project is in its early stage of development. I want to achieve an library and book rating app. I came up with this project while searching for books and sometimes, I forget which books I have read. I almost bought a book I already read. I could just make an library app for myself to use but then I though that I can rate the books maybe I can write somethings about them. I use some sites like IMDb , Metacritic, myanimelist and I was using a mobile app to track my books but I mostly use my pc and I buy books from my pc so I dont look at my phone most of time. I don't know if there is a app for my needs even if there is one I just want to make my own app.",
                    tr: "",
                    jp: ""
                },
            },
            {
                text: {
                    en : "In my Web projects, I mostly use React and I learned React first as a framework but I wanted to try Angular so after finishing my Udemy course, I decided to make this app with Angular. Finishing of this app can take a bit long so thanks to that I will keep my angular skill fresh. Other than that I want to make an API. I havent decided the technologies for that but I might try to learn new technologies especially Java so I can build an app also I can use this app to try new technologies. It will be like two bird with one stone. I also want to display 3D library I have a scene for that in my mind but I dont know if I can achieve that but I will try to get as close as to my imagination.",
                    tr: "",
                    jp: ""
                },
            },
            {
                text: {
                    en : "If I can achieve my basic needs for this app, I have plan to add some more features to this app and maybe it can be a place for book nerds to criticize books, talk about books, socialize. It can be a big Facebook for book worms.",
                    tr: "",
                    jp: ""
                },
            },
        ],
        images: [
            {
                name: "main",
                url: '/projects/web/MyLibrary/my-library-home-page.png'
            },
            {
                name: "secondary",
                url: '/projects/web/MyLibrary/my-library-home-page.png'
            },
        ],
        githubLink: "https://github.com/Honeybadger-png/my-library"

    },
    {
        id:2,
        projectName : "Microservice Experiments",
        mainImage: '/projects/web/Microservice/docker.png',
        summary: {
            en: "Fascinated by the scale of modern e-commerce, I began exploring how massive codebases stay manageable and scalable. This journey led me into the world of microservices. These projects represent my experiments with system inter-connectivity and distributed architecture.",
            tr: "",
            jp: ""
        },
        usedTechnologies: ["Docker","Kubernetes","Google Cloud"],
        projectIcons: [
            {
                icon: "github",
                link: 'https://github.com/Honeybadger-png/my-library',
                name: 'github'
            }
        ],
        images: [
            {
                name: "main",
                url: "/projects/web/Microservice/docker.png"
            }
        ],
        projectTexts: [
            {
                text: {
                    en : "Driven by a curiosity for large-scale systems, I completed an intensive deep dive into Microservices. I evolved the architecture from basic service separation to a fully distributed system featuring event-driven communication, container orchestration with Docker/Kubernetes, and cloud service integration. This experiment taught me how to manage complex, multi-container environments and, more importantly, gave me the architectural maturity to recognize when a project’s scale justifies—or doesn't justify—the complexity of microservices.",
                    tr: "",
                    jp: ""
                },

            },
        ]

    },
    {
        id:3,
        projectName : "Parsley",
        mainImage: '/projects/web/parsley/Parsley.png',
        summary: {
            en: "Developed as my 2023 University thesis, Parsley is a mobile health planner that generates personalized meal plans and recipes. This project marked my first venture into AI integration, featuring a custom chatbot powered by GPT-2.0, and served as the stepping stone for my transition into full-stack web development. ",
            tr: "",
            jp: ""
        },
        usedTechnologies: ["Flutter","Firebase","AI"],
        projectIcons: [
            {
                icon: "github",
                link: 'https://github.com/Honeybadger-png/Flutter-Projects',
                name: 'github'
            }
        ],
        images: [
            {
                name: "main",
                url: "/projects/web/parsley/sign_in_screen.png"
            },
            {
                name: "main",
                url: "/projects/web/parsley/main_and_detail.png"
            },
            {
                name: "main",
                url: "/projects/web/parsley/chatbot.png"
            },
        ],
        projectTexts: [
            {
                title: "The Strategic Pivot",
                text: {
                    en: "During the planning phase, I initially envisioned a full-stack web project. However, looking at the core goal, a mobile app felt far more intuitive for a meal planner. A meal planner needs to be right at your fingertips; opening a dedicated app on your phone is much faster and more accessible than navigating to a website through a mobile browser.",
                    tr: "",
                    jp: ""
                },

            },
            {
                title: "The Technical Struggle & Scope Creep",
                text: {
                    en: "I knew learning a new language and platform simultaneously would be a challenge. I started with Kotlin, but while finding my footing there, I discovered Flutter. The prospect of publishing to both iOS and Android from one codebase was too tempting to pass up, so I made the switch. (The honeymoon phase) lasted a few days before the real struggle began—specifically with the backend. Using free recipe APIs gave me very little control, and building my own backend felt like an insurmountable task without prior experience. Ultimately, I decided to scale down the project to ensure I could deliver a finished product",
                    tr: "",
                    jp: ""
                },

            },
            {
                title: "The Productive Failure & Lessons Learned",
                text: {
                    en: "At one point, I envisioned an LLM-driven assistant that provided meal plans, exercise ideas, and productivity schedules based on user preferences. Since ChatGPT was booming, I managed to integrate a chatbot using the OpenAI API. In the end, I only achieved about 10-20% of my initial vision. While the project didn't meet all my original goals, I consider it a success in learning. It taught me about product management, scoping, and handling deadlines—including squashing bugs just two hours before a presentation. I realized that defining a project’s boundaries and knowing your own capabilities is just as important as the code itself.",
                    tr: "",
                    jp: ""
                },
            },
        ]

    },
    
]



export const artProjectsData : artProjectsType [] = [
    {
        id:4,
        projectName: "Stanley Quencher",
        fileName: "null",
        secondaryImage: "/projects/models/images/Stanley_Quencher_02.png",
        mainImage: "/projects/models/images/stanley_quencher_vertical.png",
        usedSoftware: ["Blender"],
        polycount: 56.359,
        summaryText: 
            {
                en: "When I first decided to create my working table to display on the homepage. I was a big fan of stanley thermos and I created its model with the different colors I chose.",
                tr: "",
                jp: ""
            }
        ,
        detailedImages: [
            {
                name: "main",
                url: "/projects/models/images/stanley_quencher_vertical.png"
            }
        ]

    },
    {
        id:5,
        projectName: "Asus Rog Pugio II",
        fileName: "null",
        secondaryImage: "/projects/models/images/asus_rog_pugio_2.png",
        mainImage: "/projects/models/images/asus_mouse_vertical.png",
        polycount: 11.638,
        usedSoftware: ["Blender"],

        summaryText: 
            {
                en: "This is my mouse I am currently using and I like its design. Its a bit heavy for especially fps games but Asus logo and transparent body is cool.",
                tr: "",
                jp: ""
            }
        ,
       detailedImages: [
            {
                name: "main",
                url: "/projects/models/images/asus_mouse_vertical.png"
            }
        ]
    },
    {
        id:6,
        projectName: "Laptop",
        fileName: "null",
        secondaryImage: "/projects/models/images/laptop_render.png",
        mainImage: "/projects/models/images/laptop_vertical.png",
        usedSoftware: ["Blender"],
        polycount: 112.567,
        summaryText: 
            {
                en: "Well this laptop is my friend for a lot of time she is getting old but I create models with this machine. Its brand is monster its not 100% same with the current laptop so I didn't put the brand name.",
                tr: "",
                jp: ""
            }
        ,
       detailedImages: [
            {
                name: "main",
                url: "/projects/models/images/laptop_vertical.png"
            }
        ]
    },
] 
