import { languageType } from "../Lib/lang";

enum skillTypes {
    Web = "Web",
    Game = "Game",
    Language = "Language"
}

export interface AboutType {
    title: languageType;
    profileImg: string;
    texts: languageType[];
}

export interface ExperienceType  {
    company: string;
    startDate: string;
    endDate: string;
    status: languageType;
    location: string;
    texts : languageType[]; 
}

export interface ContactSection{
    header: languageType;
    text: languageType;
    mail: string;
}

export interface ExperienceComponent {
    title: languageType;
    experiences: ExperienceType[]
}

export const experienceData: ExperienceComponent = {
    title: {
        en: "WORK EXPERIENCE",
        tr: "",
        jp: ""
    },
    experiences: [
        {
            company: "Asumona",
            startDate: "02/2023",
            endDate: "06/2023",
            status: {
                en: "Intern",
                tr: "",
                jp: ""
            },
            location: "Ankara",
            texts: [
                {
                    en: "During my internship, I had an opportunity to work on Frontend Development. I gained hands on experience PHP and Laravel.asdsadsadasdsadsadasdasdsadas",
                    tr: "",
                    jp: ""
                }
            ],
        },
    ]
}


export const skills = [
    {
        name: skillTypes.Web,
        title: {
            en: "Web",
            tr: "Web",
            jp: ""
        },
        logos: [
            {
                url: "logo/skills_logo/html.png"
            },
            {
                url: "logo/skills_logo/css.png"
            },
            {
                url: "logo/skills_logo/tailwind.png"
            },
            {
                url: "logo/skills_logo/react.png"
            },
            {
                url: "logo/skills_logo/next.png"
            },
            {
                url: "logo/skills_logo/figma.png"
            },
        ]
    },
    {
        name: skillTypes.Game,
        title: {
            en: "Game",
            tr: "Oyun",
            jp: ""
        },
        logos: [
            {
                url: "logo/skills_logo/blender.png"
            },
            {
                url: "logo/skills_logo/unity.png"
            },
        ]
    },
    {
        name: skillTypes.Language,
        title: {
            en: "Language",
            tr: "Dil",
            jp: ""
        },
        languages: ["English","Japanese"]

    }
]

export const contactSectionData: ContactSection = {
    header: {
        en: "Contact Me",
        tr: "",
        jp: ""
    },
    mail: "mertgul1878@gmail.com",
    text: {
        en: "I don't have a Mailgun subscription. But you can reach me with my email or my social media links.",
        tr: "",
        jp: ""
    }
}

export const aboutData: AboutType = {
    title: {
        en: "Mert Gul | Frontend Developer and 3D Character Artist",
        jp: "",
        tr: ""
    },
    profileImg: "",
    texts: [
        {
            en: "Hi! I am a Computer Engineering student at Karabuk University seeking career as a Frontend Developer. I am still a student because I couldn't find an internship to get my degree for years. I am a curious person and I have passion for tech and I believe, that passion cost me to spend a lot of time on different topics and fields. After experiencing most of the fields and technologies I decided to focus on Web Development and I try to get better with my skills and I will always learn new things. I have also passion on 3D models and I try to showcase my models on my website. I like to sculpt in Blender as a hobby I find it very calming exercise. For Web Development, I mostly work with React because my projects are in small scale. I have tried Angular after getting a challenge for internship I find it useful for bigger projects. I have also learned Microservice architecture but I couldn't find chance to use the skills I learned so I focused on Frontend Development. I have still things to learn and master in Frontend Development and I want experience while doing it. So, If you are a someone who can help me find a job or internship my only intention is to gain experience and have fun while working in a team. I value about company culture and the atmosphere among the teammates. Yes, money is important but if I can't work proficient in the company that doesn't matter.",
            jp: "",
            tr: ""
        },
        {
            en: "This part will have less technical stuff. I write it because I like writing and I want to put more things about what kind of person I am and I want to give some spoiler about my personality. I born in Karabuk/ Safranbolu and We moved to Bartin after my 7th grade I was 13. I am a calm person and not a very active in my social life. I like to spend time by myself most of the time. I first met computer thanks to my neighbors son and I was the kid who plays game on the computer of neighbors child. My dream job change by years I wanted to be a police, vet because I love animals and We had a dog named Deyzi(Dayz). After moving out to Bartin, I spend more time on computer because I was in a different school and I didn't have friends at the start and I started to learn more stuff about computer, games and finally software. I first started experiment with just Plain HTML and some CSS. That caused me to choose Computer Engineering and I just wrote Computer Engineering While choosing Universities after the exam. I returned to my hometown thanks to my family. It was exciting to start a college and I had dreams about making some cool projects. Making my own Website for nerd people who likes to read, play video games, watching movies. I wanted people like me to get socialize. I wanted to make my own games with my friends in the prep class. We first started to become a team and I learned Blender because we needed a 3D artist. I am the person who gives compromises and care teams needs. I try not to nowadays but I like to help.",
            jp: "",
            tr: ""
        },
        {
            en: "Well, Writing helps a lot my writing isn't strong enough but I try to make it more readable and fun. During my school year, We first started to learn C, Java followed it and C#. Well I learned python too because it was kinda easy to learn and I chose embedded systems lesson. I even learned Kotlin and Flutter for my final project. Covid times were awful and That also effected my life a lot because I started to know new people and have new friends. During Covid we had to not see each other. Hope we don't experience something like that in the future. I had dreams I couldn't accomplished them yet. I am 25 now and I will try to make a come up and I believe my time will come. I am also learning Japanese its kind of a hate and love relationship between me and Japanese. If you come here by reading all, I thank you and I hope it was fun to read.",
            jp: "",
            tr: ""
        }
    ]
}
