import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { useTheme, Theme } from "@emotion/react";
type InputProps = {
  label: string;
};

type propType ={
  theme:{
    colors:{
      input:{
        background?:string,
        border?:string,
        placeholder?:string
      }
    }
  }
}

const labelStyles = (theme: Theme) =>
  css({
    color: theme.colors.input.label, // Use the theme object to access the primary color
    marginBottom: 10,
  });

const InputWrapper = styled.div`
  display: block;
`;

const InputField = styled.input`
  padding: 8px 16px;
  font-size: 16px;
  background-color: ${(props:propType) => props.theme.colors?.input.background};
  color: white;
  border: ${(props:propType) => props.theme.colors?.input.border};
  border-radius: 5px;
  cursor: pointer; 
  placeholder: ${(props:propType) => props.theme.colors?.input.placeholder};
  &:hover {
    background-color: #0056b3;
  }
`;

const Input = ({ label }: InputProps) => {
  const theme = useTheme();
  return (
    <InputWrapper>
      <Text className={labelStyles(theme)}>{label}</Text>
      <InputField type="text" placeholder="New" />
    </InputWrapper>
  );
};

export default Input;
