import React from "react";
import { graphql } from "gatsby";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Page } from "./stranica";

export default ({ data: { naslovna, posts } }) => {
  return (
    <>
    <Page myDataText="Homepage text"></Page>     
    </>
  );
};

export const query = graphql`
  query {
    naslovna: markdownRemark(frontmatter: { page: { eq: "naslovna" } }) {
      html
    }

    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      markdowns: edges {
        markdown: node {
          id
          excerpt(pruneLength: 600)
          frontmatter {
            title
            slug
            image {
              childImageSharp {
                fluid(
                  maxWidth: 350
                  maxHeight: 260
                  cropFocus: NORTH
                  traceSVG: { color: "#663399" }
                ) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
