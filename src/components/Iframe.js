import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  height: 0;
  margin: auto;
  padding-block-start: 75%;
  position: relative;
  width: calc(100% - 40px); /* gapS両端分 */
  iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const Iframe = ({ src }) => {
  console.log(src);
  return (
    <Wrap>
      <iframe
        src={src}
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        loading="lazy"
      />
    </Wrap>
  );
};

export default Iframe;
