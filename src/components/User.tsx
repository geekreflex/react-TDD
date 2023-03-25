import { useModalContext } from '../context/ModalConext';
import AddUser from './AddUser';
import UsersList from './UsersList';

const User = () => {
  const { isAddModalOpen, openAddModal } = useModalContext();
  return (
    <div>
      <button onClick={openAddModal}>Add New User</button>
      {isAddModalOpen && <AddUser />}
      <UsersList />
    </div>
  );
};

export default User;
