/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import Img from 'gatsby-image';

const Example = ({ data }) => {
  const { imageSharp } = data;
  return (
    <div>
      <h1>Example</h1>
      <Img alt="Picture of X" sizes={imageSharp.sizes} />
      <p>This is an example showing the use of &quot;gatsby-image&quot;.</p>
    </div>
  );
};

export const pageQuery = graphql`
  query ExampleQuery {
    imageSharp(id: { regex: "/about/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default Example;
