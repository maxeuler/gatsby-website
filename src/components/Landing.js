import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Title = styled('div')`
  margin: 3rem 0;
  p {
    font-size: 10rem;
  }
  div {
    margin: 5rem;
  }
  font-weight: 300;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  a {
    font-size: 2.5rem;
    border: 1px solid #555;
    text-decoration: none;
    padding: 1rem;
    border-radius: 4px;
    :hover {
      color: #000;
      border-color: #000;
      font-weight: 350;
    }
  }
`;

const Landing = () => (
  <Title>
    <div>
      <p>I'm Max,</p>
      <p>Web Developer 👋🏼</p>
    </div>
    <Link to="/">View Projects</Link>
  </Title>
);

export default Landing;
