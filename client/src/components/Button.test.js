import { render, screen } from '@testing-library/react';
import Button from './Button';

//  Assuming you have variables like id, title, feature, and date
// test("checks types of variables", () => {
//   const mockData = {
//     id: 123,
//     title: "Example Title",
//     feature: true,
//     date: new Date()
//   };
  
//   expect(mockData.id).toEqual(expect.any(Number));
//   expect(mockData.title).toEqual(expect.any(String));
//   expect(mockData.feature).toEqual(expect.any(Boolean));
//   expect(mockData.date).toEqual(expect.any(Date));
// });
test("renders <Button/> in the DOM", () => {
    render(<Button />);
    const btnElement = screen.getByRole("button")
    expect(btnElement).toBeInTheDocument();
})



