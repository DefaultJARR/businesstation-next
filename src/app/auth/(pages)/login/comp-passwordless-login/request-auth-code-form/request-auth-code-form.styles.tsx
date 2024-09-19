import styled from 'styled-components';

export const StyledRequestAuthCodeForm = styled.form`
  width: 100%;
  margin: 20px 0;
`;

export const PasslessGuideText = styled.p<{ color: string }>`
  margin-bottom: 5px;
  color: ${({ color }) => color};
`;

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
