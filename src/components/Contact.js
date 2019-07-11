import React from 'react';
import { css } from '@emotion/core';
import { Title } from '../pages/about';

const Contact = () => (
  <div>
    <Title>Send me something beautiful ✏️</Title>
    <div
      css={css`
        display: flex;
        flex-direction: column;
        font-size: 3rem;
        text-align: center;
        margin-top: 6rem;
        line-height: 2;
        @media (max-width: 700px) {
          font-size: 2rem;
        }
        a {
          text-decoration: none;
        }
        span {
          font-weight: 600;
          :hover {
            font-weight: 900;
          }
        }
      `}
    >
      <a
        href="https://github.com/maxeuler"
        target="_blank"
        rel="noopener noreferrer"
      >
        😺 Take a look at my 👉🏼 <span>GitHub</span>
      </a>
      <a
        href="https://www.xing.com/profile/Max_Euler4/cv"
        target="_blank"
        rel="noopener noreferrer"
      >
        🤝 Contact me on 👉🏼 <span>Xing</span>
      </a>
      <a href="mailto:maxjuliuseuler@gmail.com">
        📫 Or just send me a 👉🏼 <span>Mail</span>
      </a>
    </div>
  </div>
);

export default Contact;
