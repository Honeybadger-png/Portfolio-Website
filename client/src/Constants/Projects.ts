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

export interface webProjects {
    projectName : string;
    githubLink? : string;
    projectLink? : string;
    projectIcons : [icons];
    mainImage : string;
    projectTexts : [projectText];
}


export interface threeDProjects {
    projectName: string;
    fileName?: string;
    mainImage: Image;
}
