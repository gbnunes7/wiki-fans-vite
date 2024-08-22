import { Outlet } from "react-router-dom"

const InitialLayout = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
    <>
        {isModalOpen && <Modal onClick={toggleModal} />}
        <Header onClick={toggleModal}/>
        <main className="bg-grey md:overflow-hidden h-full">
            <Outlet/>
        </main>
    </>
    )
        
}