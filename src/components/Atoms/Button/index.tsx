"use client";
import styled from '@emotion/styled'

export type ButtonProps = {
  size: "sm" | "md" | "lg",
  m?: string,
  ml?: string,
  mr?: string,
  mt?: string,
  mb?: string,
  p?: string,
  pt?: string,
  pb?: string,
  pl?: string,
  pr?: string,
  color?: string,
  bgColor?: string,
  border?: string,
  borderRadius?: string
}

const Button = styled.button<ButtonProps>`
  margin: ${(props) => props.m || '0'};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  padding: ${(props) => props.p || '0.5rem 1rem'};
  color: ${(props) => props.color || '#fff'};
  background: ${(props) => props.bgColor || 'linear-gradient(160deg, rgb(145, 114, 247) 0%, rgb(104, 61, 247) 100%)'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.borderRadius || '30px'};
  font-size: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '0.7rem';
      case 'lg':
        return '1.25rem';
      case 'md':
      default:
        return '1rem';
    }
  }};
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    opaacity: 0.5;
    transform: scale(1.03);
  };
  }
`;

export default Button;
