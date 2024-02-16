import styled from "@emotion/styled";

export type CustomInputProps = {
    background?:string,
    border?:string,
    hoverBgColor?:string,
    borderRadius?:string,
    padding?:string,
    width?:string,
    margin?:string
};

const CustomInput = styled.input<CustomInputProps>`
  padding: ${(props:CustomInputProps) => props.padding ||"10px 20px"};
  font-size: 16px;
  background-color: ${(props:CustomInputProps) => props.background || "#eee"};
  color: black;
  border: ${(props:CustomInputProps) => props.border || "1px solid black"};
  border-radius: ${(props:CustomInputProps) => props.borderRadius || "2px"};
  width:${(props:CustomInputProps) => props.width || "10px 20px"}
  margin:${(props:CustomInputProps) => props.margin || "10px 10px"};

  &:hover {
    background-color: ${(props:CustomInputProps) => props.hoverBgColor};
  }

  &:focus {
    outline: none;
    border-color: rgb(145, 114, 247); /* Example: Change border color on focus */
  }
`;

export default CustomInput;
