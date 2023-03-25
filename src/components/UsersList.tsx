import React from 'react';
import { useUserContext } from '../context/UserContext';
import UserCard from './UserCard';

const UsersList = () => {
  const { users } = useUserContext();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UsersList;
