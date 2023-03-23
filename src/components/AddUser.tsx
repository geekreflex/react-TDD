import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import Modal from './Modal';

const AddUser = () => {
  const [name, setName] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <Modal title="Add new user">
      <div>
        <form>
          <Input value={name} label="Full name" onChange={handleNameChange} />
          <Input value={name} label="Photo Url" onChange={handleNameChange} />
          <Button value="Submit" />
        </form>
      </div>
    </Modal>
  );
};

export default AddUser;
