import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App'

test('should render the app without crashing', async () => {
  const { findByText } = render(<App />);
  const title = await findByText(/GiFox/i);
  expect(title).toBeInTheDocument();
})

test('should be used the form', async () => {
  render(<App />);
  const input = await screen.findByRole('textbox');
  fireEvent.change(input, { target: { value: 'Naruto' } });
  const button = await screen.findByRole('button');
  fireEvent.click(button)

  const title = await screen.findByText('Naruto');
  expect(title).toBeVisible();
})
