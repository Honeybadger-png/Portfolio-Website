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
    text: string;
    image?: Image;
}

export interface webProjectsType {
    projectName : string;
    githubLink? : string;
    projectLink? : string;
    projectIcons : [icons];
    mainImage : string;
    projectTexts : [projectText];
}

export const webProjects: webProjectsType[] = [
    {
        projectName : "Parsley",
        mainImage: '',
        projectIcons: [
            {
                icon: "sadsa",
                link: 'asdads',
                name: 'asda'
            }
        ],
        projectTexts: [
            {
                text: "asdasdsadad",
                image: 
                    {
                        name: "asddad",
                        url: "asdasd"
                    },
            }
        ]

    },
    {
        projectName : "Parsley1",
        mainImage: '',
        projectIcons: [
            {
                icon: "sadsa",
                link: 'asdads',
                name: 'asda'
            }
        ],
        projectTexts: [
            {
                text: "asdasdsadad",
                image: 
                    {
                        name: "asddad",
                        url: "asdasd"
                    },
            }
        ]

    },
    {
        projectName : "Parsley2",
        mainImage: '',
        projectIcons: [
            {
                icon: "sadsa",
                link: 'asdads',
                name: 'asda'
            }
        ],
        projectTexts: [
            {
                text: "asdasdsadad",
                image: 
                    {
                        name: "asddad",
                        url: "asdasd"
                    },
            }
        ]

    },
    {
        projectName : "Parsley3",
        mainImage: '',
        projectIcons: [
            {
                icon: "sadsa",
                link: 'asdads',
                name: 'asda'
            }
        ],
        projectTexts: [
            {
                text: "asdasdsadad",
                image: 
                    {
                        name: "asddad",
                        url: "asdasd"
                    },
            }
        ]

    },
    {
        projectName : "Parsley4",
        mainImage: '',
        projectIcons: [
            {
                icon: "sadsa",
                link: 'asdads',
                name: 'asda'
            }
        ],
        projectTexts: [
            {
                text: "asdasdsadad",
                image: 
                    {
                        name: "asddad",
                        url: "asdasd"
                    },
            }
        ]

    },
    {
        projectName : "Parsley5",
        mainImage: '',
        projectIcons: [
            {
                icon: "sadsa",
                link: 'asdads',
                name: 'asda'
            }
        ],
        projectTexts: [
            {
                text: "asdasdsadad",
                image: 
                    {
                        name: "asddad",
                        url: "asdasd"
                    },
            }
        ]

    },
    {
        projectName : "Parsley6",
        mainImage: '',
        projectIcons: [
            {
                icon: "sadsa",
                link: 'asdads',
                name: 'asda'
            }
        ],
        projectTexts: [
            {
                text: "asdasdsadad",
                image: 
                    {
                        name: "asddad",
                        url: "asdasd"
                    },
            }
        ]

    },
    {
        projectName : "Parsley7",
        mainImage: '',
        projectIcons: [
            {
                icon: "sadsa",
                link: 'asdads',
                name: 'asda'
            }
        ],
        projectTexts: [
            {
                text: "asdasdsadad",
                image: 
                    {
                        name: "asddad",
                        url: "asdasd"
                    },
            }
        ]

    },
    {
        projectName : "Parsley9",
        mainImage: '',
        projectIcons: [
            {
                icon: "sadsa",
                link: 'asdads',
                name: 'asda'
            }
        ],
        projectTexts: [
            {
                text: "asdasdsadad",
                image: 
                    {
                        name: "asddad",
                        url: "asdasd"
                    },
            }
        ]

    },
]

export interface threeDProjects {
    projectName: string;
    fileName?: string;
    mainImage: Image;
}
