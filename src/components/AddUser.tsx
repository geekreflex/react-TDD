import React, { useState } from 'react';
import { Input } from './Input';
import Modal from './Modal';

const AddUser = () => {
  const [name, setName] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <Modal>
      <div>
        <Input value={name} label="Full name" onChange={handleNameChange} />
        <Input value={name} label="Photo Url" onChange={handleNameChange} />
      </div>
    </Modal>
  );
};

export default AddUser;
