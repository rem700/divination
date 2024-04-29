import type TarotCard from "../../../types/tarotCard";

function useData() {
    const tarotCards: TarotCard[] = [
        {
            name: "The Fool",
            imgUrl: "",
        },
        {
            name: "The Magician",
            imgUrl: "", 
        },
        {
            name: "The High Priestess",
            imgUrl: "", 
        },
        {
            name: "The Empress",
            imgUrl: "", 
        },
        {
            name: "The Emperor",
            imgUrl: "", 
        },
        {
            name: "The Hierophant",
            imgUrl: "", 
        },
        {
            name: "The Lovers",
            imgUrl: "", 
        },
        {
            name: "The Chariot",
            imgUrl: "", 
        },
        {
            name: "Strength",
            imgUrl: "",
        },
        {
            name: "The Hermit",
            imgUrl: "", 
        },
    ];
    return { tarotCards };
}

export default useData;
