import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";
import Img from "gatsby-image";
export default ({ posts }) => {
  const postsList = posts.map(post => {
    const { id, excerpt } = post.node;
    const { title, date, slug, ocjena, zanr,image } = post.node.frontmatter;
    
    return (
      <section key={id} className={styles.Post}>

        <Img className={styles.myPic} fluid={image.childImageSharp.fluid} />
        
        <div className={styles.kratkiOpisFilma}>
          <h2 className={styles.Title}>
            <Link to={`blog/${slug}`}>{title}</Link>
          </h2>
                  
          <span className={styles.Date}>{date}</span>
        
          <p className={styles.Opis}>Rating: {ocjena}</p>
          <p className={styles.Opis}>Genre: {zanr}</p>
          </div>
          
          <p className={styles.Excerpt}>{excerpt}</p>
         
      </section>
    );
  });

  return postsList;
};
