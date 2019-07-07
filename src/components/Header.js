import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const NavLink = styled(Link)`
  color: #222;
  font-size: 2.4rem;
  font-weight: 300;
  text-decoration: none;
  padding: 2rem;
  display: inline-block;
  :hover {
    border-bottom: 1px solid #000;
    color: #000;
  }
`;

const Header = () => (
  <header
    css={css`
      background: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      align-items: center;
      nav {
        display: flex;
        margin: 0;
        justify-content: space-around;
      }
    `}
  >
    <NavLink to="/">Max Euler</NavLink>
    <nav>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  </header>
);

export default Header;
