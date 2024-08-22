const Card = ({src,alt,nome}) => {
    return (
            <div className="bg-light-red min-h-52 flex flex-col items-center p-2 rounded shadow-md shadow-black hover:cursor-pointer hover:scale-110 duration-100 ">
                <img src={src} className="w-28 h-44 rounded m-2 object-cover" alt={alt} />
                <p>{nome}</p>
            </div>
    )
}

export default Card