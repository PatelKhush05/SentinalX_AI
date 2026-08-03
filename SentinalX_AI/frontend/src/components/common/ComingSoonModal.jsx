import Modal from "./Modal";
import { FaTools } from "react-icons/fa";

function ComingSoonModal({
    open,
    onClose,
    title,
    features
}) {

    return (

        <Modal
            open={open}
            onClose={onClose}
        >

            <div className="p-8">

                <div className="flex justify-center">

                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">

                        <FaTools
                            className="text-4xl text-blue-600"
                        />

                    </div>

                </div>

                <h2 className="text-3xl font-bold text-center mt-6">

                    {title}

                </h2>

                <p className="text-slate-500 text-center mt-3">

                    This feature is planned for the next development phase of
                    Cloud SentinalX AI.

                </p>

                <div className="mt-8">

                    {features.map((feature) => (

                        <div
                            key={feature}
                            className="flex items-center gap-3 py-2"
                        >

                            <span className="text-green-600">

                                ✓

                            </span>

                            <span>

                                {feature}

                            </span>

                        </div>

                    ))}

                </div>

                <button

                    onClick={onClose}

                    className="mt-8 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"

                >

                    Continue

                </button>

            </div>

        </Modal>

    );

}

export default ComingSoonModal;