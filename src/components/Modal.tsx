interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="fixed flex justify-center items-center left-0 top-0 right-0 bg-black opacity-60 h-screen px-4 ">
      <div className="w-full bg-white rounded-2xl md:w-1/2">
        <div className="px-6 py-4  border-b border-gray-200">Header</div>
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
