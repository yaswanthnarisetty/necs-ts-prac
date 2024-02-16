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
  margin: ${(props: ButtonProps) => props.m || '0'};
  margin-left: ${(props: ButtonProps) => props.ml};
  margin-right: ${(props: ButtonProps) => props.mr};
  margin-top: ${(props: ButtonProps) => props.mt};
  margin-bottom: ${(props: ButtonProps) => props.mb};
  padding-top: ${(props: ButtonProps) => props.pt};
  padding-bottom: ${(props: ButtonProps) => props.pb};
  padding-left: ${(props: ButtonProps) => props.pl};
  padding-right: ${(props: ButtonProps) => props.pr};
  padding: ${(props: ButtonProps) => props.p || '0.5rem 1rem'};
  color: ${(props: ButtonProps) => props.color || '#fff'};
  background: ${(props: ButtonProps) => props.bgColor || 'linear-gradient(160deg, rgb(145, 114, 247) 0%, rgb(104, 61, 247) 100%)'};
  border: ${(props: ButtonProps) => props.border || 'none'};
  border-radius: ${(props: ButtonProps) => props.borderRadius || '30px'};
  font-size: ${(props: ButtonProps) => {
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
