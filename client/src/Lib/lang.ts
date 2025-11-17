export type Language = "en" | "tr" | "jp";
export type languageType = {
    en: string,
    tr: string,
    jp: string
}

let currentLanguage: Language = "en";

export const setLanguage = (language:Language) => {
    currentLanguage = language;
}

export const getLanguage = () => currentLanguage;