import { render, screen } from '@testing-library/react';
import App from './App';
import Nav from './components/Nav';
import Products from './components/Products';
import Home from './components/Home'

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
