import { languageType } from "../Lib/lang";

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


enum skillTypes {
    Web = "Web",
    Game = "Game",
    Language = "Language"
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

