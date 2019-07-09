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
          demo_url
          stack
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
            height: 400px;

            .content {
              margin: 3rem;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              font-size: 1.8rem;
              h3 {
                font-size: 3rem;
              }
              .stack {
                font-style: italic;
              }
            }
            a {
              text-decoration: none;
              border-radius: 3px;
              border: 1px solid #888;
              color: #888;
              font-weight: 600;
              padding: 1rem 3rem;
              text-align: center;
              :hover {
                color: #555;
                border-color: #555;
              }
            }
            .links {
              display: flex;
              justify-content: space-around;
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
            <p className="stack">{project.stack}</p>
            <p>{project.description}</p>
            <div className="links">
              <a
                href={project.git_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Git
              </a>
              {project.demo_url && (
                <a
                  href={project.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default Project;
