import { useEffect, useState } from "react";
import Card from "../Card";
import Header from "../Header";
import Modal from "../Modal";

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [characters, setCharacters] = useState([])

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
         fetch('http://localhost:3000/characters')
            .then(resposta => resposta.json())
            .then(dados => setCharacters(dados))
    },[])

    return (
        <>
        {isModalOpen && <Modal onClick={toggleModal} />}
        
        <div className="h-screen flex flex-col"> 
            <Header onClick={toggleModal}/>
            <main className="bg-grey md:overflow-hidden h-full">
                <div className="bg-grey md:bg-white md:mx-auto flex md:h-full md:w-full md:max-w-5xl flex-col md:rounded-xl md:shadow-2xl my-10 md:max-h-[90%] md:relative md:py-4 items-center max-sm:gap-4">
                    <h2 className="text-2xl">House of Dragons</h2>
                    <ul className="mt-4 px-3.5 flex gap-8 justify-center flex-wrap">
                        {characters.map(character => <li key={character.id}> <Card src={character.imagem} alt={character.alt} nome={character.nome}/></li>)}
                    </ul>
                </div>
            </main>
        </div>
        </>
    )
}

export default Home