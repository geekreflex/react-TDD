import React from 'react';
import { useUserContext } from '../context/UserContext';

const UsersList = () => {
  const { users } = useUserContext();
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name} </div>
      ))}
    </div>
  );
};

export default UsersList;
