import React from "react";
import styled from "@emotion/styled";
import Text, { TextProps } from "@/components/Atoms/Text";
import Box from "@/components/Atoms/Box";

type SideBarProps = {
  title: string;
  width: string;
  height: string;
  children?: React.ReactNode;
  borderRadius?: string;
};

const SideBar: React.FC<SideBarProps> = ({
  title,
  children,
  width,
  height,
  borderRadius,
}) => (
  <Box
    width={width}
    height={height}
    borderradius={borderRadius}
    backgroundcolor="#cfc8c8"
    padding="40px"
  >
    <Text fontSize="30px" color="white" padding="20px" fontWeight="bold">
      {title}
    </Text>
    {children}
  </Box>
);

export default SideBar;
