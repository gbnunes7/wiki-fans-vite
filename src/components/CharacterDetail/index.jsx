import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CharacterDetail = () => {

    const {id} = useParams()
    const [character, setCharacter] = useState([])

    useEffect(() => {
        console.log("Fetching character with id:", id)
        fetch('http://localhost:3000/characters')
        .then(response => response.json())
        .then(data => {
            const foundCharacter = data.find(char => char.id === id);
            setCharacter(foundCharacter || {});
            console.log(foundCharacter)
        })
        .catch(error => console.error("Error fetching data: ", error));
    }, [id]);

    return (
        <>
        <div className="h-screen flex flex-col"> 
            <main className="bg-grey md:overflow-hidden h-full">
                <div className="bg-grey md:bg-white md:mx-auto flex md:h-full md:w-full md:max-w-5xl flex-col md:rounded-xl md:shadow-2xl my-10 md:max-h-[90%] md:relative md:py-4 items-center max-sm:gap-4">
                    <h2 className="text-2xl">House of Dragons</h2>
                    <div className="mt-4 px-3.5 flex gap-8 justify-center flex-wrap">
                        <h1 className="text-3xl">{character.nome}</h1>
                        <img src={character.imagem} alt={character.alt} className="w-48 rounded m-2" />
                        <p className="mt-2">{character.dragao}</p>
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}


export default CharacterDetail