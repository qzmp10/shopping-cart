import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import Nav from './components/Nav';
import Products from './components/Products';
import Home from './components/Home'
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe("nav bar", () => {
  it('nav bar logo renders text', () => {
    render (<Nav />);
    const header = screen.getByRole('heading');
    expect(header.textContent).toMatch('Logo');
  });

  it('three navigation divs', () => {
    render (<Nav />);
    const navigationDivs = screen.getAllByRole('navigation');
    expect(navigationDivs.length).toBe(3);
  });
}) 

describe('home container', () => {
  it('home page renders', () => {
    render(<Home />, {wrapper: BrowserRouter});
    const header = screen.getByRole('heading');
    const underHeader = screen.getByRole('second-heading');
    const shop = screen.getByRole('link');

    expect([header, underHeader, shop].length).toBe(3);
  })
})

describe('product container', () => {
  it('product page has header', () => {
    render(<Products />);

    const header = screen.getByRole('heading');

    expect(header.textContent).toMatch('Products')
  })

  it('product page has 4 product divs', () => {
    render(<Products />);
    const productDivArray = screen.getAllByTestId('productDiv');

    expect(productDivArray.length).toBe(4);
  })
})