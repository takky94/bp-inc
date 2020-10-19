import { keyframes } from 'styled-components';

const fadeDown = keyframes`
  0%{
    transform: translateY(-50px);
  }
  100%{
    transform: none;
  }
`;

export default fadeDown;
