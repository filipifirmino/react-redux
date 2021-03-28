
import React from 'react'
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Card from './components/Card';
import Home from './Pages/Home';
import Details from './Pages/Details';
import {renderWithRouterAndStore } from './testConfig'
import { fireEvent } from '@testing-library/react';

test('Checks if the title of the home page exists.',() => {
    const { getByRole } = renderWithRouterAndStore(<App />);
    
    const title = getByRole('heading', {level:1});
    expect(title.textContent).toBe('Countries of the world');
});

test('Checks if there is a search input',() => {
    const { getByTestId } = renderWithRouterAndStore(<App />);
    
    const searchInput = getByTestId('search')
    expect(searchInput).toBeInTheDocument();
});

test('whether the input receives text',() => {
    const { getByTestId } = renderWithRouterAndStore(<App />);
    
    const inputText = getByTestId('search');
    expect(inputText).toHaveValue('');
    fireEvent.change(inputText, {target: {value: 'Brazil'}});
    expect(inputText).toHaveValue('Brazil');
});

test('Checks if there is a search button',() => {
    const { getByTestId } = renderWithRouterAndStore(<App />);
    
    const searchButton = getByTestId('search-button')
    expect(searchButton).toBeInTheDocument();
});

test('Checks if there is a loading', async () => {
    const { getByText } = renderWithRouterAndStore(<App />);
    
    const searchButton = getByText(/Loading.../i)
    expect(searchButton).toBeInTheDocument();
});



