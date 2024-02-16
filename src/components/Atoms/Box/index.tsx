"use client";
import styled from "@emotion/styled";

type BoxProps = {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
  gap?:string;
  placeItems?:string;
  backgroundColor?: string;
  width?: string;
  minWidth?:string;
  maxWidth?:string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  padding?: number;
  margin?: number;
  borderRadius?:number;
  textAlign?:string;
  overflowx?: string;
  overflowy?: string;
  position?: string; 
  top?: string; 
  left?: string; 
  right?: string;
  gridTemplateColumns?:string
  pl?:string;
  pr?:string;
  pb?:string;
  pt?:string;
  mr?: string;
  mt?: string;
  ml?: string;
  mb?: string;
  [x: string]: any;
  disabled?:true;
  bt?:boolean;
  bb?:boolean;
};

const Box = styled.div<BoxProps>`
background: ${(props:BoxProps) => props.backgroundColor};
width: ${(props:BoxProps) => props.width};
height: ${(props:BoxProps) => props.height};
min-width: ${(props:BoxProps) => props.minWidth};
max-width: ${(props:BoxProps) => props.maxWidth};
min-height: ${(props:BoxProps) => props.minHeight};
max-height: ${(props:BoxProps) => props.maxHeight};
text-align: ${(props:BoxProps) => props.textAlign};
padding-left : ${(props:BoxProps) => props.pl};
padding-right : ${(props:BoxProps) => props.pr};
padding-bottom : ${(props:BoxProps) => props.pb};
padding-top : ${(props:BoxProps) => props.pt};
margin-right: ${(props:BoxProps) => props.mr};
margin-top: ${(props:BoxProps) => props.mt};
margin-left: ${(props:BoxProps) => props.ml};
margin-bottom: ${(props:BoxProps) => props.mb};
overflow-x: ${(props:BoxProps)=>props.overflowx};
overflow-y: ${(props:BoxProps)=>props.overflowy};
border-radius: ${(props:BoxProps) => props.borderRadius}px;
position: ${(props:BoxProps) => props.position};
top: ${(props:BoxProps) => props.top};
left: ${(props:BoxProps) => props.left};
right: ${(props:BoxProps) => props.right};
bottom: ${(props:BoxProps) => props.bottom};
z-index: ${(props:BoxProps) => props.zindex};
opacity:${(props:BoxProps) => props.disabled ?"0.5":"" };


${(props:BoxProps) => props.padding && { padding: `${props.padding}px`}};
${(props:BoxProps) => props.margin && { margin: props.margin * props.theme.gutter }};
  
  ${(props:BoxProps) =>
    props.display &&
    ` display : ${props.display};
      flex-wrap: ${props.flexWrap};
      flex-direction: ${props.flexDirection};
      justify-content: ${props.justifyContent};
      justify-items:${props.justifyItems};
      place-items:${props.placeItems};
      align-items: ${props.alignItems};
      gap: ${props.gap};
      grid-template-columns:${props.gridTemplateColumns};
    `}
`;

// Box.defaultProps = {
//   backgroundColor:theme.colors.whiteA
// };

export default Box;

