const Card = () => {
    return (
            <div className="bg-primary-red min-h-52 flex flex-col items-center p-2 rounded shadow-2xl shadow-grey hover:cursor-pointer hover:scale-110 duration-100 ">
                <img src="https://pm1.aminoapps.com/8414/3adf5a076e9ec7b55fb5084d301c349667381f9br1-750-937v2_00.jpg" className="w-28 rounded m-2" alt="Rhaneyra" />
                <p>Nome do Personagem</p>
            </div>
    )
}

export default Card