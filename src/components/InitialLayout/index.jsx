import { Outlet } from "react-router-dom"
import { useState } from "react";
import Header from "../Header";
import Modal from "../Modal"

const InitialLayout = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
    <>
        {isModalOpen && <Modal onClick={toggleModal} />}
        <Header onClick={toggleModal}/>
        <Outlet/>
        
    </>
    )
        
}

export default InitialLayout