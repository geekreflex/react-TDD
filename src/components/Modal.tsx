import { IoClose } from 'react-icons/io5';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  close: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, title, close }) => {
  return (
    <div className="fixed flex justify-center items-center left-0 top-0 right-0  h-screen px-4 z-10">
      <div
        className="absolute left-0 top-0 bg-gray-900 h-screen w-full opacity-50"
        onClick={close}
      />
      <div className="relative w-full bg-white rounded-2xl md:w-2/3 lg:w-2/5 shadow-2xl">
        <div className="flex justify-between items-center px-6 py-4  border-b border-gray-200">
          <span className="text-lg">{title}</span>
          <button
            className="hover:bg-gray-200 text-lg p-2 rounded"
            onClick={close}
          >
            <IoClose />
          </button>
        </div>
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
