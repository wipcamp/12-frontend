import styled, { keyframes } from 'styled-components';
 
export const keyFrameGlow = keyframes`
  0% { 
      box-shadow: 0 0 10px #2ba805;
      border-radius: 50%;
     }
50% { 
    box-shadow: 0 0 50px #49e819;
    border-radius: 50%;
    

    }
100% { 
       box-shadow: 0 0 30px #2ba805;
       border-radius: 50%;

    }
`