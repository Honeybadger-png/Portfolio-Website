import { languageType } from "../Lib/lang";

export interface ExperienceType  {
    company: string;
    startDate: string;
    endDate: string;
    status: languageType;
    location: string;
    texts : languageType[]; 
}

export const experiences: ExperienceType[] = [
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