import { keyframes } from 'styled-components';

const fadeDown = keyframes`
  0%{
    opacity: 0;
    transform: translateY(-50px);
  }
  100%{
    opacity: 1;
    transform: none;
  }
`;

export default fadeDown;
