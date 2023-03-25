import { useState } from 'react';
import { IoEllipsisVertical } from 'react-icons/io5';
import { useUserContext } from '../context/UserContext';
import { User } from '../types/user';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative bg-gray-50 border border-gray-200 rounded-xl p-5">
      {show && <Dropdown id={user.id} />}
      <div
        className="absolute right-5 w-8 h-8 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-100"
        onClick={() => setShow(!show)}
      >
        <IoEllipsisVertical />
      </div>
      <div className="flex mb-5 gap-5 items-center">
        <img
          src={user.photoUrl}
          alt={user.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-gray-800">{user.name}</h3>
          <span className="text-gray-500">{user.headline}</span>
        </div>
      </div>
      <p className="text-md text-gray-800">{user.description}</p>
    </div>
  );
};

export default UserCard;

interface DropdownProps {
  id: string;
}

const Dropdown: React.FC<DropdownProps> = ({ id }) => {
  const { deleteUser, updateUser } = useUserContext();

  const handleUpdateModal = () => {
    console.log('Update clicked');
  };

  const items = [
    {
      name: 'Update user',
      click: handleUpdateModal,
    },
    { name: 'Delete user', click: () => deleteUser(id) },
  ];

  return (
    <ul className="absolute bg-gray-200 right-8 top-14 py-2 shadow-xl rounded-lg border border-gray-300">
      {items.map((item) => (
        <li
          onClick={item.click}
          className="px-5 py-2 text-sm text-gray-700 hover:bg-gray-300 cursor-pointer hover:text-gray-800"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};
