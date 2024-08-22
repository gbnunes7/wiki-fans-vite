import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { IoArrowBack } from "react-icons/io5";

const CharacterDetail = () => {

    const navigate = useNavigate();
    const {idJson} = useParams()
    const [character, setCharacter] = useState({})
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        console.log("Fetching character with id:", idJson)
        fetch('https://json-server-vercel-kappa-coral.vercel.app/characters')
        .then(response => response.json())
        .then(data => {
            const foundCharacter = data.find(char => char.idJson == idJson);
            setCharacter(foundCharacter || {});
            console.log(foundCharacter)
        })
        .catch(error => console.error("Error fetching data: ", error));
    }, [idJson]);

    return (
        <div className="h-screen bg-grey flex items-center justify-center"> 
            <div className="bg-white rounded-lg shadow-2xl mx-2 py-4 md:max-w-4xl md:w-full flex flex-col md:pb-24 md:pt-12 md:px-4 md:mb-24"> 
                    <div className="flex justify-center md:justify-around">
                        <button onClick={() => navigate(-1)} className="md:relative md:right-8 md:bottom-2"><IoArrowBack/></button>
                        <h2 className="text-3xl mb-4 md:relative md:right-28">House of Dragons</h2> 
                    </div>
                    <div className="mt-4 mr-3 flex flex-col md:flex-row gap-8 justify-between items-center mx-24 ">
                        <motion.img 
                        src={isHovered ? character.hoverImage : character.imagem} 
                        alt={character.alt} 
                        className="w-52 h-80 rounded m-2 shadow-2xl mr-auto shadow-black object-cover" 
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