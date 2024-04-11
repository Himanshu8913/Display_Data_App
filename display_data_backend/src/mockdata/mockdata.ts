export interface Books {
    id: number,
    author: string,
    country: string,
    language: string,
    pages: number,
    title: string,
}

export const mockData: Books[] = [
    {
        id: 1,
        author: "Chinua Achebe",
        country: "Nigeria",
        language: "English",
        pages: 209,
        title: "Things Fall Apart",
    },
    {
        id: 2,
        author: "Hans Christian Andersen",
        language: "Danish",
        country: "Denmark",
        pages: 784,
        title: "Fairy tales",
    },
    {
        id: 3,
        author: "Dante Alighieri",
        language: "Italian",
        country: "Italy",
        pages: 928,
        title: "The Divine Comedy",
    },
    {
        id: 4,
        author: "Unknown",
        country: "Sumer and Akkadian Empire",
        language: "Akkadian",
        pages: 160,
        title: "The Epic Of Gilgamesh",
    },
    {
        id: 5,
        author: "Unknown",
        country: "Achaemenid Empire",
        language: "Hebrew",
        pages: 176,
        title: "The Book Of Job",
    },
    {
        id: 6,
        author: "Unknown",
        country: "India/Iran",
        language: "Arabic",
        pages: 288,
        title: "One Thousand and One Nights",
    }
]