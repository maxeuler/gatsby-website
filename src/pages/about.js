import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import Me from '../components/Me';

export const Title = styled('h3')`
  margin: 3rem 0;
  font-size: 6rem;
  text-align: center;
  font-weight: 300;
`;

const About = () => (
  <Layout>
    <div>
      <Title>About 🙋🏼‍♂️</Title>
      <Me></Me>
    </div>
  </Layout>
);

export default About;
