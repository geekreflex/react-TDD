import React, { useState } from 'react';
import { Input } from './Input';

const Todo = () => {
  const [name, setName] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <form>
        <Input value={name} label="Full name" onChange={handleNameChange} />
        <Input value={name} label="Photo Url" onChange={handleNameChange} />
      </form>
    </div>
  );
};

export default Todo;
