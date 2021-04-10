import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as S from './styled'

const Background = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "main.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 6000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  // Set ImageData.
  const imageData = data.file.childImageSharp.fluid

  return (
    <S.BackgroundWrapper
      Tag="section"
      fluid={imageData}
    />
  )
}

export default Background;
