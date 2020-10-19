import { keyframes } from 'styled-components';

const topActive = keyframes`
  0%{
    transform: translateX(1.5px) translateY(3.5px) rotate(45deg);
  }
  100%{
    transform: rotate(0deg);
  }
`;

export default topActive;
