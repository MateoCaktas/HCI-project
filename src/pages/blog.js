import React from "react";
import { graphql } from "gatsby";
import { BlogIndex } from "components";

export default ({
  data: {
    allMarkdownRemark: { edges: posts } // Rename edges to posts
  }
}) => {
  return (
    <>
      <h1 className="mostPopularNaslov">List of all our movies</h1>
      <BlogIndex posts={posts} />
      <button className="toTopButton" onClick={() => {
        window.scrollTo(0,0);
      }}>Scroll to top</button> 

    </>
  );
};

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            slug
            ocjena
            zanr
            image{
              childImageSharp{
                fluid(
                  maxWidth: 350
                  maxHeight: 500
                  cropFocus: NORTH
                  traceSVG: { color: "#663399" }
                ) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;