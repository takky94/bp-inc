import { keyframes } from 'styled-components';

const bottom = keyframes`
  0%{
    transform: translateX(2px) translateY(-3px) rotate(45deg);
  }
  100%{
    transform: rotate(0deg);
  }
`;

export default bottom;
