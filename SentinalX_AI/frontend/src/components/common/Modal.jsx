function Modal({ open, onClose, children }) {

  if (!open) return null;

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg mx-4">

        {children}

      </div>

    </div>

  );

}

export default Modal;