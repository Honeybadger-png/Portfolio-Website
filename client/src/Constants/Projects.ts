import { languageType } from "../Lib/lang";

export interface webProjectsType {
    id: number;
    projectName : string;
    summary: languageType;
    usedTechnologies: languageType[];
    githubLink? : string;
    projectLink? : string;
    projectIcons : icons[];
    mainImage : string;
    projectTexts : projectText[];
}


export interface artProjectsType {
    id: number;
    projectName: string;
    explanations: languageType[];
    fileName?: string;
    mainImage: string;
    secondaryImage: string;
    summaryTexts: languageType[];
    detailedImages?: Image[];
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
    text: languageType;
    image?: Image;
}



export const webProjects: webProjectsType[] = [
    {
        id: 1,
        projectName : "My Library",
        mainImage: '/projects/web/MyLibrary/my-library-home-page.png',
        summary: {
            en: "Its a project that I want to build for book nerds and all kinds of nerds in the end product. I tried to use different technologies and frameworks to test my abilities. In short term, I plan to use this website to store my read books in different section. User can comment, rate and maybe talk about the books with other readers. My dream is to build an app where people can talk about their favorite books, movies , games. I want people to socialize through their hobbies especially introvert, nerd people like me. I stil have concern about this kind of project for more please go to detail page.",
            tr: "",
            jp: ""
        },
        usedTechnologies: [
            {
                en: "Angular",
                tr: "",
                jp: ""
            },
            {
                en: "Tailwindcss",
                tr: "",
                jp: ""
            }
        ],
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
                image: 
                    {
                        name: "Main Image",
                        url: "/projects/web/MyLibrary/my-library-home-page.png"
                    },
            },
            {
                text: {
                    en : "In my Web projects, I mostly use React and I learned React first as a framework but I wanted to try Angular so after finishing my Udemy course, I decided to make this app with Angular. Finishing of this app can take a bit long so thanks to that I will keep my angular skill fresh. Other than that I want to make an API. I havent decided the technologies for that but I might try to learn new technologies especially Java so I can build an app also I can use this app to try new technologies. It will be like two bird with one stone. I also want to display 3D library I have a scene for that in my mind but I dont know if I can achieve that but I will try to get as close as to my imagination.",
                    tr: "",
                    jp: ""
                },
                image: 
                    {
                        name: "Library Tables",
                        url: "there will be a image related to Library Section"
                    },
            },
            {
                text: {
                    en : "If I can achieve my basic needs for this app, I have plan to add some more features to this app and maybe it can be a place for book nerds to criticize books, talk about books, socialize. It can be a big Facebook for book worms.",
                    tr: "",
                    jp: ""
                },
                image: 
                    {
                        name: "project introduction",
                        url: "there will be a image related to final project"
                    },
            },
        ]

    },
    {
        id:2,
        projectName : "Microservice Experiments",
        mainImage: '/projects/web/Microservice/docker.png',
        summary: {
            en: "I am always fascinated about how big e-commerce app working and I have met microservice architecture. I wanted to learn it and this collection of projects are traces of my work during taking a course. Unfortunately, I haven't apply what I have learned to my projects due to scale of my projects. Hope, I can be in the environment of using cloud, docker, kubernetes and be part of a big team someday.",
            tr: "",
            jp: ""
        },
        usedTechnologies: [
            {
                en: "Docker",
                tr: "",
                jp: ""
            },
            {
                en: "Typescript",
                tr: "",
                jp: ""
            },
            {
                en: "Google Cloud",
                tr: "",
                jp: ""
            }
        ],
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
                    en : "My library project is in its early stage of development. I want to achieve an library and book rating app. I came up with this project while searching for books and sometimes, I forget which books I have read. I almost bought a book I already read. I could just make an library app for myself to use but then I though that I can rate the books maybe I can write somethings about them. I use some sites like IMDb , Metacritic, myanimelist and I was using a mobile app to track my books but I mostly use my pc and I buy books from my pc so I dont look at my phone most of time. I don't know if there is a app for my needs even if there is one I just want to make my own app.",
                    tr: "",
                    jp: ""
                },
                image: 
                    {
                        name: "Main Image",
                        url: "/projects/web/MyLibrary/my-library-home-page.png"
                    },
            },
            {
                text: {
                    en: "In my Web projects, I mostly use React and I learned React first as a framework but I wanted to try Angular so after finishing my Udemy course, I decided to make this app with Angular. Finishing of this app can take a bit long so thanks to that I will keep my angular skill fresh. Other than that I want to make an API. I havent decided the technologies for that but I might try to learn new technologies especially Java so I can build an app also I can use this app to try new technologies. It will be like two bird with one stone. I also want to display 3D library I have a scene for that in my mind but I dont know if I can achieve that but I will try to get as close as to my imagination.",
                    tr: "",
                    jp: ""
                },
                image: 
                    {
                        name: "Library Tables",
                        url: "there will be a image related to Library Section"
                    },
            },
            {
                text: {
                    en : "If I can achieve my basic needs for this app, I have plan to add some more features to this app and maybe it can be a place for book nerds to criticize books, talk about books, socialize. It can be a big Facebook for book worms.",
                    tr: "",
                    jp: ""
                },
                image: 
                    {
                        name: "project introduction",
                        url: "there will be a image related to final project"
                    },
            },
        ]

    },
    {
        id:3,
        projectName : "Parsley",
        mainImage: '/projects/web/parsley/Parsley.png',
        summary: {
            en: "Parsley project is a product of University thesis project which I finished it in 2023. Those are the times when my interest toward Web started But my teacher wanted us to work in the different environment and I listened it to give a try to mobile. When I decide to make a project, I try to make an app for myself most of the time. So, this app is about health planning, giving daily meal plans with recipe by users preferences. I wanted to add more feature but giving the experience I had with mobile development, I wasnt able to achieve all my goals. Afterall, I managed to build a chatbox with chatgpt version 2.0 back then. ",
            tr: "",
            jp: ""
        },
        usedTechnologies: [
            {
                en: "Flutter",
                tr: "",
                jp: ""
            },
            {
                en: "Firebase",
                tr: "",
                jp: ""
            },
            {
                en: "AI",
                tr: "",
                jp: ""
            }
        ],
        projectIcons: [
            {
                icon: "github",
                link: 'https://github.com/Honeybadger-png/Flutter-Projects',
                name: 'github'
            }
        ],
        projectTexts: [
            {
                text: {
                    en: "In this project, I wanted to try different technologies, learn them and apply the things I learned. I worked on this project for my final project in college so I got some help from my professor on the idea of the project. My interest towards Web Development started that year but I had to make a project in different platform so I chose mobile to achieve it. ChatGPT was getting very popular those days, In my mind, I also wanted to create a chatbox to users interact with an AI. While, I was thinking about a project idea, I wanted to fix my own problem which was struggling finding meal recipes that I can cook and organize my daily, weekly routines.",
                    tr: "",
                    jp: ""
                },
                image: 
                    {
                        name: "project introduction",
                        url: "there will be a image related to creation of a project"
                    },
            },
            {
                text: {
                    en: "I know that organizing your life is hard so I wanted to help fixing this problem. Project was almost clear in my mind so I had to start choosing programming language and need to decide which technologies I am going to use in my project. At first, I started learning Kotlin but I also wanted to release my project on IOS as well. Flutter was a good option. Unfortunately, I learned that I had to have a Mac computer to test it. This problem wasn't a big deal because releasing on Android was also fine and I didn't have too much time to waste on changing languages because I had to learn it and create my app. As a plus, I was in an internship so there wasn't a lot of time. I got courses on Udemy to learn Flutter and the course was awesome, It was so helpful. I also learned firebase. At first , I had a lot of features I wanted to have on my app but I realized that The timing was so important. I understand it now. Even the big companies struggle from that. While developing an App or a project, We face a lot of problems. bugs and we don't know if we can complete the project as it is planned.",
                    tr: "",
                    jp: ""
                },
                image: 
                    {
                        name: "project introduction",
                        url: "there will be a image related to project development"
                    },
            },
            {
                text: {
                    en: "I finished the project but It wasn't the project that I imagined and planned but I can say that I achieved 60% of planned project. Parsley is an app that creates daily meals by your selected diet and your calory need. It also shows you the recipes of the meals. It has a Chatbox integrated with ChatGPT 2.0. In that time, I was able to just reach 2.0 version. I used Rest API to get the recipes, Flutter to build the app, Firebase for my data and It was ready to publish it on Android devices. It had some bugs but It was a nice journey with a lot of learnings.",
                    tr: "",
                    jp: ""
                },
                image: 
                    {
                        name: "project introduction",
                        url: "there will be a image related to final project"
                    },
            },
        ]

    },
    
]



export const ArtProjectsData : artProjectsType [] = [
    {
        id:4,
        projectName: "Stanley Quencher",
        fileName: "blabla",
        secondaryImage: "/projects/models/images/Stanley_Quencher_02.png",
        mainImage: "",
        explanations: [{
            en: "Blender",
            tr: "",
            jp: ""
        }],
        summaryTexts: [
            {
                en: "",
                tr: "",
                jp: ""
            }
        ]

    },
    {
        id:5,
        projectName: "Asus Rog Pugio II",
        fileName: "blabla",
        secondaryImage: "/projects/models/images/asus_rog_pugio_2.png",
        mainImage: "",
        explanations: [{
            en: "Blender",
            tr: "",
            jp: ""
        }],
        summaryTexts: [
            {
                en: "",
                tr: "",
                jp: ""
            }
        ]
    },
    {
        id:6,
        projectName: "Laptop",
        fileName: "blabla",
        secondaryImage: "/projects/models/images/laptop_render.png",
        mainImage: "",
        explanations: [{
            en: "Blender",
            tr: "",
            jp: ""
        }],
        summaryTexts: [
            {
                en: "",
                tr: "",
                jp: ""
            }
        ]
    },
] 
