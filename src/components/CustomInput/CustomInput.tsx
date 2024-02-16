import styled from "@emotion/styled";

export type CustomInputProps = {
    background:string,
    border:string,
    hoverBgColor:string,
    borderRadius:string,
    padding:string,
    width:string,
    margin:string
};

const CustomInput = styled.input<CustomInputProps>`
  padding: ${(props:CustomInputProps) => props.padding};
  font-size: 16px;
  background-color: ${(props:CustomInputProps) => props.background};
  color: black;
  border: ${(props:CustomInputProps) => props.border};
  border-radius: ${(props:CustomInputProps) => props.borderRadius};
  width:${(props:CustomInputProps) => props.width};
  cursor: pointer;
  margin:${(props:CustomInputProps) => props.margin};

  &:hover {
    background-color: ${(props:CustomInputProps) => props.hoverBgColor};
  }

  &:focus {
    outline: none;
    border-color: red; /* Example: Change border color on focus */
  }
`;

export default CustomInput;
