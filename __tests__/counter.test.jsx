import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../src/tests/Counter';


describe('React Counter', () => {
    test('renders Counter component with correct initial count', () => {
        render(<Counter />);
        const counterElement = screen.getByText('Counter: 0');
        expect(counterElement).toBeInTheDocument();
      });
    
      test('increments and decrements count correctly', () => {
        render(<Counter />);
        const incrementButton = screen.getByText('Increment');
        const decrementButton = screen.getByText('Decrement');
        const counterElement = screen.getByText('Counter: 0');
    
        fireEvent.click(incrementButton);
        expect(counterElement).toHaveTextContent('Counter: 1');
    
        fireEvent.click(decrementButton);
        expect(counterElement).toHaveTextContent('Counter: 0');
      });

})