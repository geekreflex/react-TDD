import { fireEvent, render, screen } from '@testing-library/react';

import AddUser from '../components/AddUser';

describe('AddUser', () => {
  it('renders Add User component', async () => {
    const { getByText } = render(<AddUser />);
    expect(getByText('Add new user')).toBeInTheDocument();
  });

  it('handles form input changes correctly', () => {
    const { getByLabelText } = render(<AddUser />);
    const nameInput = getByLabelText('Full Name');
    const photoUrlInput = getByLabelText('Photo Url');
    const descriptionInput = getByLabelText('Description');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput).toHaveValue('John Doe');

    fireEvent.change(photoUrlInput, {
      target: { value: 'https://example.com/photo.jpg' },
    });
    expect(photoUrlInput).toHaveValue('https://example.com/photo.jpg');

    fireEvent.change(descriptionInput, {
      target: { value: 'Some description' },
    });
    expect(descriptionInput).toHaveValue('Some description');
  });

  it('calls handleSubmit function when form is submitted', () => {
    const { getByText } = render(<AddUser />);
    const submitButton = getByText('Submit');

    fireEvent.click(submitButton);
  });
});
