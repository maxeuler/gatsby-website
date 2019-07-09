import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import { graphql, useStaticQuery, Link } from 'gatsby';

const Project = () => {
  const { allProjectsJson, allImageSharp } = useStaticQuery(graphql`
    query {
      allProjectsJson {
        nodes {
          name
          description
          image
          git_url
        }
      }
      allImageSharp {
        nodes {
          fluid {
            originalName
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
            display: grid;
            grid-template-columns: 50% 50%;
            border: 1px solid #eee;
            box-shadow: 1px 1px 4px 2px #ddd;
            margin: 3rem 0;
            .image {
            }
            .content {
              margin: 0 3rem;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              font-size: 1.5rem;
              h3 {
                font-size: 2.3rem;
              }
            }
          `}
          key={project.name}
        >
          <Image
            fluid={
              allImageSharp.nodes.find(
                image => image.fluid.originalName == project.image
              ).fluid
            }
            className="image"
          ></Image>
          <div className="content">
            <h3>{project.name}</h3>
            <p>{project.image}</p>
            <p>{project.description}</p>
            <a href={project.git_url} target="_blank" rel="noopener noreferrer">
              Git
            </a>
          </div>
        </article>
      ))}
    </>
  );
};

export default Project;
