import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

import App from './App'; // Adjust the import based on the actual file structure

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('displays the result of a basic addition operation', () => {
    const { getByTestId, getByText } = render(<App />);

    // Click on the number keys and the addition operation
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));

    // Assert that the result is displayed correctly
    expect(getByTestId('output-display')).toHaveTextContent('3');
  });

  it('clears the display when the "C" button is clicked', () => {
    const { getByTestId, getByText } = render(<App />);

    // Click on the number keys and the "C" button
    fireEvent.click(getByText('1'));

    // Assert that the display is updated
    expect(getByTestId('output-display')).toHaveTextContent('1');

    //Click clear display button
    fireEvent.click(getByText('AC'));

    // Assert that the display is cleared
    expect(getByTestId('output-display')).toHaveTextContent('');
  });

  // Add more test cases as needed based on the functionality of your calculator
});
