import { StyledButtonBase } from '@/components/button-base.styles';
import { EnumBaseColors } from '@/theme/entities/enum-base-colors';
import styled from 'styled-components';


export const LoginForm = styled.form`
  width: 100%;
  margin: 20px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid ${EnumBaseColors.LightGray};
`;

export const LoginSubmitBtn = styled(StyledButtonBase)<{ color: string }>`
  width: 100%;
  background-color: ${({ color }) => color};
  border: 1px solid ${({ color }) => color};
  color: #fff;
  transition: all 300ms ease-in-out;
  font-weight: bold;
`;

export const LoginRecoverText = styled.p`
  font-size: 0.75em;
  text-align: center;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
