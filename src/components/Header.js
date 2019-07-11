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
  height: 100%;
  :hover,
  &.current {
    border-bottom: 1px solid #000;
    color: #000;
  }
  @media (max-width: 700px) {
    font-size: 1.8rem;
    font-weight: 600;
    padding: 1rem;
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
      @media (max-width: 700px) {
        display: grid;
        grid-template-columns: 100%;
      }
      nav {
        display: flex;
        margin: 0;
        justify-content: space-around;
        align-items: center;
      }
      .links {
        display: flex;
        height: 100%;
        > * {
          margin: 0 1rem;
        }
      }
    `}
  >
    <NavLink to="/">Max Euler</NavLink>
    <nav>
      <NavLink to="/projects" activeClassName="current">
        <p>Projects</p>
      </NavLink>
      <NavLink to="/about" activeClassName="current">
        About
      </NavLink>
      <NavLink to="/contact" activeClassName="current">
        Contact
      </NavLink>
    </nav>
  </header>
);

export default Header;
