import { render, screen } from '@testing-library/react';

import AddUser from '../components/AddUser';

describe('AddUser', () => {
  it('renders Add User component', async () => {
    render(<AddUser />);
    screen.debug();
  });
});
