import React, { useState } from 'react';
import { useModalContext } from '../context/ModalConext';
import { Button } from './Button';
import { Input, Textarea } from './Input';
import Modal from './Modal';

interface AddUserProps {}

const AddUser: React.FC<AddUserProps> = () => {
  const { closeAddModal } = useModalContext();
  const [name, setName] = useState<string>('');
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(e.target.value);
  };

  const handlePhotoUrlChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPhotoUrl(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const payload = {
      name,
      photoUrl,
      description,
    };
    console.log(payload);
  };

  return (
    <Modal title="Add new user" close={closeAddModal}>
      <div>
        <form>
          <div>
            <Input value={name} label="Full Name" onChange={handleNameChange} />
            <Input
              value={photoUrl}
              label="Photo Url"
              onChange={handlePhotoUrlChange}
            />
            <Textarea
              value={description}
              label="Description"
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="flex justify-end">
            <Button value="Submit" click={handleSubmit} />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddUser;
