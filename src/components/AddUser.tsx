import React, { useState } from 'react';
import { useModalContext } from '../context/ModalConext';
import { useUserContext } from '../context/UserContext';
import { Button } from './Button';
import { Input, Textarea } from './Input';
import Modal from './Modal';

interface AddUserProps {}

const AddUser: React.FC<AddUserProps> = () => {
  const { closeAddModal } = useModalContext();
  const [name, setName] = useState<string>('');
  const [headline, setHeadline] = useState<string>('');
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const { addUser } = useUserContext();

  const resetFrom = () => {
    setName('');
    setHeadline('');
    setPhotoUrl('');
    setDescription('');
  };

  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(e.target.value);
  };

  const handleHeadlineChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setHeadline(e.target.value);
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
    if (
      name === '' &&
      photoUrl === '' &&
      description !== '' &&
      headline !== ''
    ) {
      return;
    }
    const payload = {
      name,
      headline,
      photoUrl,
      description,
    };
    addUser(payload);
    resetFrom();
  };

  return (
    <Modal title="Add new user" close={closeAddModal}>
      <div>
        <form>
          <div>
            <Input
              value={name}
              label="Full Name"
              onChange={handleNameChange}
              id="fullname"
            />
            <Input
              value={headline}
              label="Headline"
              onChange={handleHeadlineChange}
              id="headline"
            />
            <Input
              value={photoUrl}
              label="Photo Url"
              onChange={handlePhotoUrlChange}
              id="photourl"
            />
            <Textarea
              value={description}
              label="Description"
              onChange={handleDescriptionChange}
              id="description"
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
