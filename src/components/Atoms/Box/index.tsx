"use client";
import styled from "@emotion/styled";

type Boxprop = {
  backgroundcolor?: string;
  color?: string;
  pl?: string;
  pr?: string;
  pt?:string;
  pb?:string;
  padding?: string;
  borderradius?: string;
  border?: string;
  width?: string;
  height?: string;
  margin?: string;
  ml?: string;
  mr?: string;
  mt?:string;
  mb?:string;
  display?: string;
  flexdirection?: string;
  justifycontent?: string;
  boxshadow?: string;
  gap?: string;
  aligenitems?: string;
};

const Box = styled.div<Boxprop>`
background-color: ${(props: Boxprop) => props.backgroundcolor};
  color:${(props: Boxprop) => props.color};
  padding:${(props: Boxprop) => props.padding};
  padding-left:${(props: Boxprop) => props.pl};
  padding-right:${(props: Boxprop) => props.pr};
  padding-top:${(props: Boxprop) => props.pt};
  padding-bottom:${(props: Boxprop) => props.pb};
  border-radius:${(props: Boxprop) => props.borderradius};
  border:${(props: Boxprop) => props.border};
  width:${(props: Boxprop) => props.width};
  height:${(props: Boxprop) => props.height};
  margin:${(props: Boxprop) => props.margin};
  margin-left:${(props: Boxprop) => props.ml};
  margin-right:${(props: Boxprop) => props.mr};
  margin-top:${(props: Boxprop) => props.mt};
  margin-bottom:${(props: Boxprop) => props.mb};
  display:${(props: Boxprop) => props.display};
  flex-direction:${(props: Boxprop) => props.flexdirection};
  justify-content:${(props: Boxprop) => props.justifycontent};
  box-shadow:${(props: Boxprop) => props.boxshadow};
  gap:${(props: Boxprop) => props.gap} ;
  aligen-items:${(props: Boxprop) => props.aligenitems};

`;

export default Box;
