import React from 'react';
import styled from '@emotion/styled';

const AboutText = styled('div')`
  font-size: 3rem;
  line-height: 1.5;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 700px) {
    font-size: 2rem;
  }
  ul {
    margin: 2rem 4rem;
    list-style: none;
  }
  span {
    font-size: 4rem;
  }
`;

const Me = () => (
  <AboutText>
    <p>
      <span>👴🏼</span> 22 years old
    </p>
    <p>
      <span>👨🏼‍🎓</span> Computer Sience at Technische Hochschule Mittelhessen
    </p>
    <p>
      <span>🌥️</span> Currently Salesforce Developer
    </p>
    <p>
      <span>✍️</span> My stack:
    </p>
    <ul>
      <li>👉🏼 JavaScript</li>
      <li>👉🏼 React</li>
      <li>👉🏼 NodeJS</li>
      <li>👉🏼 MongoDB</li>
      <li>👉🏼 GraphQL</li>
    </ul>
    <p>
      <span>🚀</span> Only at the beginning, but on the right way
    </p>
  </AboutText>
);

export default Me;
