import React from 'react';

import styled, { css, keyframes } from 'styled-components';

//#region styles
const lineAnimation = (totalUnits: number) => keyframes`
  0%,100% {
    stroke-dashoffset: ${totalUnits};
  }
  50% {
    stroke-dashoffset: 0;
  }
  50.1% {
    stroke-dashoffset: ${2 * totalUnits};
  }
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledSpinnerSVG = styled.svg<{
  size: number;
  $lineWidth: number;
  r: number;
  $d: number;
  color: string;
  $duration: number;
}>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  position: relative;
  animation: ${rotateAnimation} ${({ $duration }) => $duration}s linear infinite;

  .top-circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: ${({ $lineWidth }) => $lineWidth}px;
    stroke: ${({ color }) => color};
    stroke-linecap: round;
    stroke-dasharray: ${({ $d }) => $d}; // 300
    stroke-dashoffset: ${({ $d }) => $d};
    ${({ $d, $duration }) => css`
      animation: ${lineAnimation($d)} ${$duration}s linear infinite;
    `}
  }

  .bottom-circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: ${({ $lineWidth }) => $lineWidth}px;
    stroke: ${({ color }) => color};
    opacity: 0.5;
  }
`;
//#endregion

interface PropTypes {
  size: number;
  lineWidth: number;
  color?: string;
  duration?: number;
}

export const SpinnerLoader: React.FC<PropTypes> = ({
  size = 30,
  lineWidth = 10,
  color = 'black',
  duration = 2,
}) => {
  const r = (size - lineWidth) / 2;
  const d = 2 * Math.PI * r;

  return (
    <StyledSpinnerSVG
      size={size}
      $lineWidth={lineWidth}
      r={r}
      $d={d}
      color={color}
      $duration={duration}
    >
      <circle
        className="top-circle"
        cx={size / 2}
        cy={size / 2}
        r={r}
        strokeWidth={lineWidth}
      ></circle>

      <circle
        className="bottom-circle"
        cx={size / 2}
        cy={size / 2}
        r={r}
        strokeWidth={lineWidth}
      ></circle>
    </StyledSpinnerSVG>
  );
};
