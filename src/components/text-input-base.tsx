import React, { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

export enum TextInputStyles {
  outline = 'outline',
  filled = 'filled',
}

//#region styles
export const InputWrapper = styled.div<{ $width: string; $margin: string }>`
  width: ${({ $width }) => $width};
  margin: ${({ $margin }) => $margin};
`;

export const InputBase = styled.input<{
  $styletype: string;
  color: string;
  $color2: string;
  $haveError: boolean;
}>`
  height: 40px;
  width: 100%;
  margin-bottom: 2px;
  padding-left: 12px;
  padding-right: 12px;

  outline: none;
  border-radius: 20px;
  border: 2px solid ${({ color }) => color};
  transition: all 100ms ease-in-out;

  ${({ $styletype, color }) =>
    $styletype === TextInputStyles.outline &&
    `
    border-color: ${color};
    color: ${color};
    caret-color: ${color};
    &::-webkit-input-placeholder {
      color: ${color};
      opacity: .5;
    }
  `};

  ${({ $styletype, color, $color2 }) =>
    $styletype === TextInputStyles.filled &&
    `
    border-$color: transparent;
    background-color: ${color};
    color: ${$color2};
    caret-color: ${$color2};
    &::-webkit-input-placeholder {
      color: ${$color2};
      opacity: .7;
    }
  `};

  ${({ $haveError }) =>
    $haveError &&
    `
    border-color: red;
    color: red;
    caret-color: red;
    &::-webkit-input-placeholder {
      color: red;
      opacity: .6;
    }
  `};

  &:disabled {
    opacity: 0.5;
    cursor: wait;
    user-select: none;
  }
`;

export const InputErrors = styled.div<{ color: string }>`
  font-size: 0.85em;
  text-align: right;
  color: red;
`;
//#endregion

interface PropTypes extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<any>;
  validators: any;
  styletype: TextInputStyles;
  error?: string;
  type?: string;
  width?: string;
  margin?: string;
  color?: string;
  color2?: string;
}

const TextInputBase: React.FC<PropTypes> = ({
  name,
  register,
  error,
  validators,
  styletype = TextInputStyles.outline,
  type = 'text',
  width = '100%',
  margin = '0 0 10px 0',
  color = 'black',
  color2 = 'white',
  placeholder = 'Input text',
  disabled = false,
  onInput,
  ...props
}) => {
  return (
    <InputWrapper $width={width} $margin={margin}>
      <InputBase
        type={type}
        {...register(name, { ...validators })}
        placeholder={placeholder + (validators.required ? ' (Requerido)' : '')}
        $styletype={styletype}
        color={color}
        $color2={color2}
        disabled={disabled}
        onInput={(event) => !!onInput && onInput(event)}
        $haveError={!!error}
        {...props}
      />
      {error && <InputErrors color={color}>{error}</InputErrors>}
    </InputWrapper>
  );
};

export default TextInputBase;
