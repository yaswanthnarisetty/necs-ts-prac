import styled from "@emotion/styled";

export type ButtonProps = {
  color?: string;
};

const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${(props) => props.theme.colors?.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Button;
