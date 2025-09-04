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

export interface ProjectsType{
    projectName: string;
    mainImage: string;
    projectType: string;
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
        projectName : "My Library",
        mainImage: '/projects/web/MyLibrary/my-library-home-page.png',
        projectIcons: [
            {
                icon: "github",
                link: 'https://github.com/Honeybadger-png/my-library',
                name: 'github'
            }
        ],
        projectTexts: [
            {
                text: "My library project is in its early stage of development. I want to achieve an library and book rating app. I came up with this project while searching for books and sometimes, I forget which books I have read. I almost bought a book I already read. I could just make an library app for myself to use but then I though that I can rate the books maybe I can write somethings about them. I use some sites like IMDb , Metacritic, myanimelist and I was using a mobile app to track my books but I mostly use my pc and I buy books from my pc so I dont look at my phone most of time. I don't know if there is a app for my needs even if there is one I just want to make my own app.",
                image: 
                    {
                        name: "Main Image",
                        url: "/projects/web/MyLibrary/my-library-home-page.png"
                    },
            },
            {
                text: "In my Web projects, I mostly use React and I learned React first as a framework but I wanted to try Angular so after finishing my Udemy course, I decided to make this app with Angular. Finishing of this app can take a bit long so thanks to that I will keep my angular skill fresh. Other than that I want to make an API. I havent decided the technologies for that but I might try to learn new technologies especially Java so I can build an app also I can use this app to try new technologies. It will be like two bird with one stone. I also want to display 3D library I have a scene for that in my mind but I dont know if I can achieve that but I will try to get as close as to my imagination.",
                image: 
                    {
                        name: "Library Tables",
                        url: "there will be a image related to Library Section"
                    },
            },
            {
                text: "If I can achieve my basic needs for this app, I have plan to add some more features to this app and maybe it can be a place for book nerds to criticize books, talk about books, socialize. It can be a big Facebook for book worms.",
                image: 
                    {
                        name: "project introduction",
                        url: "there will be a image related to final project"
                    },
            },
        ]

    },
    {
        projectName : "Microservice Experiments",
        mainImage: '/projects/web/Microservice/docker.png',
        projectIcons: [
            {
                icon: "github",
                link: 'https://github.com/Honeybadger-png/my-library',
                name: 'github'
            }
        ],
        projectTexts: [
            {
                text: "My library project is in its early stage of development. I want to achieve an library and book rating app. I came up with this project while searching for books and sometimes, I forget which books I have read. I almost bought a book I already read. I could just make an library app for myself to use but then I though that I can rate the books maybe I can write somethings about them. I use some sites like IMDb , Metacritic, myanimelist and I was using a mobile app to track my books but I mostly use my pc and I buy books from my pc so I dont look at my phone most of time. I don't know if there is a app for my needs even if there is one I just want to make my own app.",
                image: 
                    {
                        name: "Main Image",
                        url: "/projects/web/MyLibrary/my-library-home-page.png"
                    },
            },
            {
                text: "In my Web projects, I mostly use React and I learned React first as a framework but I wanted to try Angular so after finishing my Udemy course, I decided to make this app with Angular. Finishing of this app can take a bit long so thanks to that I will keep my angular skill fresh. Other than that I want to make an API. I havent decided the technologies for that but I might try to learn new technologies especially Java so I can build an app also I can use this app to try new technologies. It will be like two bird with one stone. I also want to display 3D library I have a scene for that in my mind but I dont know if I can achieve that but I will try to get as close as to my imagination.",
                image: 
                    {
                        name: "Library Tables",
                        url: "there will be a image related to Library Section"
                    },
            },
            {
                text: "If I can achieve my basic needs for this app, I have plan to add some more features to this app and maybe it can be a place for book nerds to criticize books, talk about books, socialize. It can be a big Facebook for book worms.",
                image: 
                    {
                        name: "project introduction",
                        url: "there will be a image related to final project"
                    },
            },
        ]

    },
    {
        projectName : "Parsley",
        mainImage: '/projects/web/parsley/Parsley.png',
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
    mainImage: string;
}
export const threeDProjects : threeDProjectsType [] = [
    {
        projectName: "Stanley Quencher",
        fileName: "blabla",
        mainImage: "/projects/models/images/Stanley_Quencher_02.png"

    },
    {
        projectName: "Asus Rog Pugio II",
        fileName: "blabla",
        mainImage: "/projects/models/images/asus_rog_pugio_2.png"
    },
    {
        projectName: "Laptop",
        fileName: "blabla",
        mainImage: "/projects/models/images/laptop_render.png"
    }
] 
