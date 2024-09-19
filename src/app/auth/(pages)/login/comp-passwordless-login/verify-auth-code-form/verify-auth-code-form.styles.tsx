import styled from 'styled-components';

export const StyledVerifyAuthCodeForm = styled.form`
  width: 100%;
  margin: 20px 0;
`;

export const PasslessGuideText = styled.p<{ color: string }>`
  margin-bottom: 5px;
  color: ${({ color }) => color};
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% auto;
  gap: 5px;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
