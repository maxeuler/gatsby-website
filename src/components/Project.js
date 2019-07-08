import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';

const Project = () => {
  const { allProjectsJson, image } = useStaticQuery(graphql`
    query {
      allProjectsJson {
        nodes {
          name
          description
          image
        }
      }
      image: file(relativePath: { eq: "js-quiz.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      {allProjectsJson.nodes.map(project => (
        <article
          css={css`
            display: flex;
            border: 1px solid #eee;
            box-shadow: 1px 1px 4px 2px #ddd;
            .image {
              width: 50%;
            }
            .content {
              margin-left: 3rem;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              font-size: 1.5rem;
              h3 {
                font-size: 2.3rem;
              }
            }
          `}
        >
          <Image fluid={image.sharp.fluid} className="image"></Image>
          <div className="content">
            <h3>{project.name}</h3>
            <p>stack</p>
            <p>description vfoedisvnlkms vis evkwjs vwsk v eiksd yv eiks</p>
            <div>
              <a>Git</a>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default Project;
