import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import Nav from './components/Nav';
import Products from './components/Products';
import Home from './components/Home'
import { useLocation } from 'react-router-dom';
import { BrowserRouter, MemoryRouter} from 'react-router-dom';
import ProductPage from './components/ProductPage';
import Vegetable from './components/Vegetable';

describe("nav bar", () => {
  it('nav bar logo renders text', () => {
    render(<Nav />);
    const header = screen.getByRole('heading');
    expect(header.textContent).toMatch('Logo');
  });

  it('three navigation divs', () => {
    render(<Nav />);
    const navigationDivs = screen.getAllByRole('navigation');
    expect(navigationDivs.length).toBe(3);
  });
})

describe('home container', () => {
  it('home page renders', () => {
    render(<Home />, { wrapper: BrowserRouter });
    const header = screen.getByRole('heading');
    const underHeader = screen.getByRole('second-heading');
    const shop = screen.getByRole('link');

    expect([header, underHeader, shop].length).toBe(3);
  })
})

describe('products container', () => {
  it('(4) products page has header', () => {
    render(<Products />, {wrapper: BrowserRouter});

    const header = screen.getByRole('heading');

    expect(header.textContent).toMatch('Products')
  })

  it('product page has 4 product divs', () => {
    render(<Products />, { wrapper: BrowserRouter });
    const productDivArray = screen.getAllByTestId('productDiv');
    expect(productDivArray.length).toBe(4);
  })
  
})

describe('the product page', () => {
  it('product page has header', () => {
    render(<ProductPage />, {wrapper: BrowserRouter});

    const header = screen.getByRole('heading');


    // expect(header.textContent).not.toBe(undefined || null || '')
    expect(header.textContent).not.toBe(3);
  
  })

})

describe('vegetable container', () => {
  it('veggie has good name & price', () => {
    render(<Vegetable veggie={'Donut'} veggiePrice={12.99} />, { wrapper: BrowserRouter });

    const productName = screen.getByText('Donut');
    const priceText = screen.getByText('$12.99')

    expect(productName.textContent).toMatch('Donut');
    expect(priceText.textContent).toMatch('$12.99')

  })
})
