import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders card title /Test title/ in the <div> with the {title} as a prop', () => {
  render(<Card title="Test title" />);
  const divElement = screen.getByText(/Test title/i);
  expect(divElement).toBeInTheDocument();
});

test('renders card footer /Test footer/ in the <div> with the {footer} as a prop', () => {
  render(<Card title="Test footer" />);
  const divElement = screen.getByText(/Test footer/i);
  expect(divElement).toBeInTheDocument();
});


