import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
         fetch('/data/db.json')
            .then(resposta => resposta.json())
            .then(dados => setCharacters(dados))
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                // Tratar o erro aqui
              })
    },[])



    return (
        <div className="md:h-screen bg-grey flex items-center justify-center"> 
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full flex flex-col pb-24 pt-12 px-12 mb-24"> 
                <h2 className="text-3xl text-center mb-4">House of Dragons</h2> 
                <ul className="mt-4 px-3.5 flex gap-8 justify-center gap-12 flex-wrap">
                    {characters.map(character => (
                        <Link key={character.idJson} to={`/characterDetail/${character.idJson}`}>
                            <li> 
                                <Card src={character.imagem} alt={character.alt} nome={character.nome} />
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div> 
    )
}

export default Home