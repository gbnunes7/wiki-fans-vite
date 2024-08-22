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
            <main className="bg-grey overflow-hidden h-full">
                <div className="bg-white mx-auto flex h-full w-full max-w-5xl flex-col rounded-xl shadow-2xl my-10 max-h-[90%] relative py-4 items-center">
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