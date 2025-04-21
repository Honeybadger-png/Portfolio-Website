export interface ExperienceType  {
    company: string;
    startDate: string;
    endDate: string;
    status: string;
    location: string;
    texts : string[]; 
}

export const experiences: ExperienceType[] = [
    {
        company: "Asumona",
        startDate: "02/2023",
        endDate: "06/2023",
        status: "Intern",
        location: "Ankara",
        texts: [
            'During my internship, I had an opportunity to work on Frontend Development. I gained hands on experience PHP and Laravel.asdsadsadasdsadsadasdasdsadas',
            'bakalim'
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
        title: skillTypes.Web,
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
        title: skillTypes.Game,
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
        title: skillTypes.Language,
        languages: ["English","Japanese"]

    }
]