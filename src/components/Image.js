import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({ filename, className = '', alt = '' }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        nodes {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 1200) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  `);

  const image = data.images.nodes.find((e) => {
    return e.relativePath.includes(filename);
  });
  if (!image) return;

  const imageSizes = image.childImageSharp.sizes;
  return <Img fluid={imageSizes} className={className} alt={alt} />;
};

export default Image;
