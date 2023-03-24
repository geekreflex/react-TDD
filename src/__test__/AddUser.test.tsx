import { fireEvent, render } from '@testing-library/react';
import { vi } from 'vitest';

import AddUser from '../components/AddUser';

describe('AddUser', () => {
  it('renders Add User component', async () => {
    const { getByText } = render(<AddUser />);
    expect(getByText('Add new user')).toBeInTheDocument();
  });

  it('handles form input changes correctly', () => {
    const payload = {
      name: 'John Doe',
      photoUrl: 'https://example.com/john-doe.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };

    const { getByLabelText } = render(<AddUser />);
    const nameInput = getByLabelText('Full Name');
    const photoUrlInput = getByLabelText('Photo Url');
    const descriptionInput = getByLabelText('Description');

    fireEvent.change(nameInput, { target: { value: payload.name } });
    expect(nameInput).toHaveValue(payload.name);

    fireEvent.change(photoUrlInput, {
      target: { value: payload.photoUrl },
    });
    expect(photoUrlInput).toHaveValue(payload.photoUrl);

    fireEvent.change(descriptionInput, {
      target: { value: payload.description },
    });
    expect(descriptionInput).toHaveValue(payload.description);
  });

  it('handleSubmit function is called with the expected payload', () => {
    const payload = {
      name: 'John Doe',
      photoUrl: 'https://example.com/john-doe.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };

    const consoleSpy = vi.spyOn(console, 'log');

    const { getByLabelText, getByText } = render(<AddUser />);

    // Select the form fields and fill in some values
    const nameInput = getByLabelText('Full Name');
    const photoUrlInput = getByLabelText('Photo Url');
    const descriptionTextarea = getByLabelText('Description');
    fireEvent.change(nameInput, { target: { value: payload.name } });
    fireEvent.change(photoUrlInput, { target: { value: payload.photoUrl } });
    fireEvent.change(descriptionTextarea, {
      target: { value: payload.description },
    });

    // Select the submit button and fire a click event
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);

    expect(consoleSpy).toHaveBeenCalledWith(payload);
    consoleSpy.mockRestore();
  });
});
