import React from 'react';
import styled from 'styled-components';

import WorkBox from './WorkBox';
import Heading from '../Heading';

const Works = () => {
  const workBoxes = [
    { title: 'test1', subTitle: 'うんこ', color: 'red', position: 'left', link: '', description: '' },
    { title: 'test2', subTitle: 'うんこ', color: 'purple', position: 'right', link: '', description: '' },
    { title: 'test3', subTitle: 'うんこ', color: 'blue', position: 'left', link: '', description: '' },
  ];
  return (
    <>
      <Heading position="right" text="WORKS" />
      {workBoxes.map((box) => (
        <WorkBox key={box.title} {...box} />
      ))}
    </>
  );
};

export default Works;
