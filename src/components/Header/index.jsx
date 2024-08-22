import { FaInfo } from "react-icons/fa";

const Header = () => {
    return (
        <header className="bg-primary-red h-16 px-12 py-4 flex items-center"> 
            <h1 className="text-3xl text-white">Wiki for fans</h1>
            <button><FaInfo className="mx-4 mt-2"/></button>
        </header>
    )
}

export default Header