import React from "react";
import {Page} from "./stranica";
import FilteredPosts from "components/FilteredPosts";
import {graphql} from "gatsby";

export default ({data: { drugaStranica, posts} }) => (
  <div>
    <Page myDataFooter="Ovo je moj tekstsssss"
    myDataText="Here you can search specific movies"/>
    <div className="ogranicenje">
      <FilteredPosts posts= {posts}/>
    </div>
  </div>
);

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
            zanr
            ocjena
            image {
              childImageSharp {
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
        }
      }
    }
  }
`;