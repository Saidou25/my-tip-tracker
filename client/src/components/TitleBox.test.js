import { render, screen } from '@testing-library/react';
import TitleBox from './TitleBox';

test('renders Sy in th <h1>', () => {
  render(<TitleBox firstname="Sy" />);
  const h1Element = screen.getByText(/Sy/i);
  expect(h1Element).toBeInTheDocument();
});
