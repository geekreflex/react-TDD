import { nanoid } from 'nanoid';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { User } from '../types/user';

type UserContextType = {
  users: User[];
  addUser: (user: Omit<User, 'id'>) => void;
  getUser: (id: string) => User | undefined;
  deleteUser: (id: string) => void;
  updateUser: (user: User) => void;
};

const UserContext = createContext<UserContextType>({
  users: [],
  addUser: () => {},
  getUser: () => undefined,
  deleteUser: () => {},
  updateUser: () => {},
});

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  const persistUsers = useCallback((users: User[]) => {
    localStorage.setItem('users', JSON.stringify(users));
  }, []);

  const addUser = useCallback(
    (user: Omit<User, 'id'>) => {
      const newId = nanoid();
      const newUsers = [...users, { ...user, id: newId }];
      setUsers(newUsers);
      persistUsers(newUsers);
    },
    [users, persistUsers]
  );

  const getUser = useCallback(
    (id: string) => {
      return users.find((user) => user.id === id);
    },
    [users]
  );

  const updateUser = useCallback(
    (user: User) => {
      const index = users.findIndex((u) => u.id === user.id);
      if (index !== -1) {
        const newUsers = [...users];
        newUsers[index] = user;
        setUsers(newUsers);
        persistUsers(newUsers);
      }
    },
    [users, persistUsers]
  );

  const deleteUser = useCallback(
    (id: string) => {
      const newUsers = users.filter((user) => user.id !== id);
      setUsers(newUsers);
      persistUsers(newUsers);
    },
    [users, persistUsers]
  );

  const contextValue = {
    users,
    addUser,
    getUser,
    updateUser,
    deleteUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
