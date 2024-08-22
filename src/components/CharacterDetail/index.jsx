import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"

const CharacterDetail = () => {

    const {id} = useParams()
    const [character, setCharacter] = useState([])
    const [isHovered, setIsHovered] = useState(false);

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
        <div className="h-screen bg-grey flex items-center justify-center"> 
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full flex flex-col pb-24 pt-12 px-4 mb-24"> 
                <h2 className="text-3xl text-center mb-4">House of Dragons</h2> 
                    <div className="mt-4 mr-3 flex gap-8 justify-between mx-24 ">
                        <motion.img 
                        src={isHovered ? character.hoverImage : character.imagem} 
                        alt={character.alt} 
                        className="w-52 h-80 rounded m-2 shadow-2xl shadow-black object-cover" 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        initial={{ opacity: 0.8 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                    />
                        <div className="mr-16 w-full">
                            <h1 className="mt-3 text-2xl">Name: {character.nome}</h1>
                            <p className="mt-3 text-2xl">Nickname: {character.nickname}  </p>
                            <p className="mt-3 text-2xl">Dragon: {character.dragao}</p>
                            <p className="mt-3 text-2xl">Age: {character.age}  </p>
                            <p className="mt-3 text-2xl">Enemies: {character.enemies}  </p>
                        </div>
                    </div>
                </div>
        </div> 
    )
}


export default CharacterDetail