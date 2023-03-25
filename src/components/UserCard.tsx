import { IoEllipsisVertical } from 'react-icons/io5';
import { useUserContext } from '../context/UserContext';
import { User } from '../types/user';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { deleteUser } = useUserContext();
  return (
    <div className="relative bg-gray-50 border border-gray-200 rounded-xl p-5">
      <div className="absolute right-5 w-8 h-8 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-100">
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
