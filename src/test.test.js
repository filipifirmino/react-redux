
import React from 'react'
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, getByRole, screen, waitFor, render, getByText, getByTestId, getAllByTestId} from '@testing-library/react';
import App from './App';
import Home from './Pages/Home';
import Details from './Pages/Details';
import renderWhitRouter from './RenderWhitRouter';
import { renderWithRouterAndStore } from './testConfig'

test('Checks if the title of the home page exists.',() => {
    const { getByRole } = renderWithRouterAndStore(<Home />);
    
    const title = getByRole('heading', {level:1});
    expect(title.textContent).toBe('Countries of the world');
});

test('Checks if there is a search button',() => {
    const { getByTestId } = renderWithRouterAndStore(<Home />);
    
    const searchButton = getByTestId('search')
    expect(searchButton).toBeInTheDocument();
});




