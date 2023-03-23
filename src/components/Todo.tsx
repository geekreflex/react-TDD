import { useModalContext } from '../context/ModalConext';
import AddUser from './AddUser';

const Todo = () => {
  const { isAddModalOpen, openAddModal } = useModalContext();
  return (
    <div>
      <button onClick={openAddModal}>Add New User</button>
      {isAddModalOpen && <AddUser />}
    </div>
  );
};

export default Todo;
