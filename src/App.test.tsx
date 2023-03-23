import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', async () => {
    render(<App />);
    screen.debug();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });
  });
});
