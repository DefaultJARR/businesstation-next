import styled from 'styled-components';

export const GlobalStylesWrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.DefaultTextColor.Color};
  }

  button {
    cursor: pointer;
  }
`;
