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
    projectIcons : icons[];
    mainImage : string;
    projectTexts : projectText[];
}

export const webProjects: webProjectsType[] = [
    {
        projectName : "Parsley",
        mainImage: '',
        projectIcons: [
            {
                icon: "github",
                link: 'https://github.com/Honeybadger-png/Flutter-Projects',
                name: 'github'
            }
        ],
        projectTexts: [
            {
                text: "In this project, I wanted to try different technologies, learn them and apply the things I learned. I worked on this project for my final project in college so I got some help from my professor on the idea of the project. My interest towards Web Development started that year but I had to make a project in different platform so I chose mobile to achieve it. ChatGPT was getting very popular those days, In my mind, I also wanted to create a chatbox to users interact with an AI. While, I was thinking about a project idea, I wanted to fix my own problem which was struggling finding meal recipes that I can cook and organize my daily, weekly routines.",
                image: 
                    {
                        name: "project introduction",
                        url: "there will be a image related to creation of a project"
                    },
            },
            {
                text: "I know that organizing your life is hard so I wanted to help fixing this problem. Project was almost clear in my mind so I had to start choosing programming language and need to decide which technologies I am going to use in my project. At first, I started learning Kotlin but I also wanted to release my project on IOS as well. Flutter was a good option. Unfortunately, I learned that I had to have a Mac computer to test it. This problem wasn't a big deal because releasing on Android was also fine and I didn't have too much time to waste on changing languages because I had to learn it and create my app. As a plus, I was in an internship so there wasn't a lot of time. I got courses on Udemy to learn Flutter and the course was awesome, It was so helpful. I also learned firebase. At first , I had a lot of features I wanted to have on my app but I realized that The timing was so important. I understand it now. Even the big companies struggle from that. While developing an App or a project, We face a lot of problems. bugs and we don't know if we can complete the project as it is planned.",
                image: 
                    {
                        name: "project introduction",
                        url: "there will be a image related to project development"
                    },
            },
            {
                text: "I finished the project but It wasn't the project that I imagined and planned but I can say that I achieved 60% of planned project. Parsley is an app that creates daily meals by your selected diet and your calory need. It also shows you the recipes of the meals. It has a Chatbox integrated with ChatGPT 2.0. In that time, I was able to just reach 2.0 version. I used Rest API to get the recipes, Flutter to build the app, Firebase for my data and It was ready to publish it on Android devices. It had some bugs but It was a nice journey with a lot of learnings.  ",
                image: 
                    {
                        name: "project introduction",
                        url: "there will be a image related to final project"
                    },
            },
        ]

    },
]

export interface threeDProjectsType {
    projectName: string;
    fileName?: string;
    mainImage: Image;
}

export const threeDProjects : threeDProjectsType [] = [
    {
        projectName: "Ruine",
        fileName: "blabla",
        mainImage: {
            name: "Smokey",
            url: "blabla.png"
        }
    },
    {
        projectName: "MyTable",
        fileName: "blabla",
        mainImage: {
            name: "Smokey",
            url: "blabla.png"
        }
    },
    {
        projectName: "Ruine",
        fileName: "blabla",
        mainImage: {
            name: "Smokey",
            url: "blabla.png"
        }
    },
    {
        projectName: "Ruine",
        fileName: "blabla",
        mainImage: {
            name: "Smokey",
            url: "blabla.png"
        }
    },
] 
