import { render, screen } from '@testing-library/react';
import App from './App';
import Nav from './components/Nav';
import Products from './components/Products';
import Home from './components/Home'

describe("nav bar", () => {
  it('nav bar matches snapshot', () => {
    const {navBar} = render (<Nav/>)
    expect(navBar).toMatchSnapshot()
  }) // no clue what this does to be honest


  it()
}) 
