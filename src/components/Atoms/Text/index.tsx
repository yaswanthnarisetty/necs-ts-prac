'use client'
import  React  from "react";
import styled from "@emotion/styled";


export type TextProps = {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  margin?: string;
  padding?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  fontFamily?: string;
};

const Text = styled.p<TextProps>((props) => ({
  color: props.color || "black",
  fontSize: props.fontSize || "10px",
  fontWeight: props.fontWeight || "20px",
  lineHeight: props.lineHeight || "2px",
  margin: props.margin || "0",
  padding: props.padding || "0",
  marginTop: props.mt || "0",
  marginRight: props.mr || "0",
  marginBottom: props.mb || "0",
  marginLeft: props.ml || "0",
  paddingTop: props.paddingTop || "0",
  paddingRight: props.paddingRight || "0",
  paddingBottom: props.paddingBottom || "0",
  paddingLeft: props.paddingLeft || "0",
  fontFamily: props.fontFamily || "",
}));

export default Text;
