import React, { Component } from 'react';
import { css } from '@emotion/core';
import Project from './Project';

class ProjectList extends Component {
  render() {
    return (
      <div
        css={css`
          margin: 6rem 0;
          h2 {
            font-size: 6rem;
            font-weight: 300;
            text-align: center;
            margin-bottom: 6rem;
          }
        `}
      >
        <h2>Projects 👨🏼‍💻</h2>
        <Project></Project>
        <h2>More 🔜 </h2>
      </div>
    );
  }
}

export default ProjectList;
