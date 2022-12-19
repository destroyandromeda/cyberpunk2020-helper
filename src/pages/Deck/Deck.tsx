import { useParams } from "react-router-dom";
export const Deck = () => {
    const { id } = useParams()
    return (
        <>
            Deck {id}
        </>
    )
}