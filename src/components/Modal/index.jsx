import { MdClose } from "react-icons/md";

const Modal = ({ onClick }) => {
    return (
        <div className="bg-dark-grey-modal fixed inset-0 flex items-center justify-center z-10">
            <div className="bg-primary-red p-6 rounded-lg text-white flex flex-col gap-4">
                <div className="flex justify-between">
                    <h3 className="text-2xl">Informations</h3>
                    <button onClick={onClick}>
                        <MdClose/>
                    </button>
                </div>
                <p className="mb-4">
                    This is a Wikipedia for fans of the series House of the Dragon. <br/><br/>Here, you can view some characters and interact with cards to see full details.
                </p>
                
                <p className="mb-4">Developed by Gabriel Melo</p>
            </div>
        </div>
    );
}

export default Modal;