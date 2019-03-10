import React from "react";
import { graphql } from "gatsby";
import styles from "./styles.module.css";

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <>
    <div className={styles.kratkeoznake}>
      <h1 className={styles.naslov}>{post.frontmatter.title}</h1>
      <div className={styles.datum}>
        Date: {post.frontmatter.date}
      </div>
      <div className={styles.ocjena}>
        Rating: {post.frontmatter.ocjena}
      </div>
      <div className={styles.zanr}>
        Genre: {post.frontmatter.zanr}
      </div>

    </div>
      <section
        className={styles.Post}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        date
        ocjena
        zanr
      }
    }
  }
`;
