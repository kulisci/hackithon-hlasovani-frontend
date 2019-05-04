import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.div`
  grid-template-column: 400px 150px 400px;
  display: grid;
  justify-items: center;
  text-align: center;
  @media (min-width: 35rem) {
    grid-template-columns: 1fr auto auto;
    justify-items: start;
  }
  background-color: white;
`;

const NavbarDiv = styled.div`
  font-size: 1.6em;
  padding: 1rem 4rem;
`;

const NavbarHr = styled.hr`
  width: 100vw;
  position: relative;
  margin-bottom: 3rem;
  margin-top: 0px;
`;

const LinkHr = styled.hr`
  width: 100vw;
  position: relative;
  left: -8px;
  display: block;
  @media (min-width: 35rem){
    display: none;
  }
`;

export default () => (
  <header>
    <Navbar>
      <NavbarDiv><Link to="/">Děčín Hlasování</Link></NavbarDiv>
      <LinkHr></LinkHr>
      <NavbarDiv><Link to="/voters">Voters</Link></NavbarDiv>
    </Navbar>
    <NavbarHr></NavbarHr>
  </header>
);
