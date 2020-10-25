import React from 'react';
import styled from 'styled-components';

import Heading from '../Heading';

const Wrap = styled.section`
  margin-block-start: ;
`;

const News = () => {
  return (
    <Wrap>
      <Heading position="left" text="News" />
    </Wrap>
  );
};

export default News;
