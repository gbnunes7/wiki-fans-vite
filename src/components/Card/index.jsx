const Card = ({src,alt,nome}) => {
    return (
            <div className="bg-primary-red min-h-52 flex flex-col items-center p-2 rounded shadow-2xl shadow-grey hover:cursor-pointer hover:scale-110 duration-100 ">
                <img src={src} className="w-28 rounded m-2" alt={alt} />
                <p>{nome}</p>
            </div>
    )
}

export default Card