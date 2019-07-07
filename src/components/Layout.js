/* eslint-disable react/prop-types */
import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }
        * + * {
          margin-top: 1px;
        }
        html,
        body {
          margin: 0;
          color: #555;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          font-size: 10px;
          > div {
            margin-top: 0;
          }
        }
        a {
          color: #555;
        }
      `}
    ></Global>
    <Helmet>
      <html lang="de"></html>
      <title>Max Euler</title>
      <meta name="description" content="test" />
    </Helmet>
    <Header></Header>
    <main
      css={css`
        margin: 2rem auto;
        max-width: 90vw;
        width: 1200px;
      `}
    >
      {children}
    </main>
  </>
);

export default Layout;
