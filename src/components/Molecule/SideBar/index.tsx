import React from "react";
import styled from "@emotion/styled";
import Text, { TextProps } from "@/components/Atoms/Text";
import Box from "@/components/Atoms/Box";

type SideBarProps = {
  title: string;
  width?: string;
  height: string;
  children?: React.ReactNode;
  borderRadius?: number;
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
    borderRadius={borderRadius || 30}
    backgroundColor="#d3d0d6"
    padding="40px"
    display="flex"
    justifyContent="flex-start"
    alignItems="center"
    flexDirection="column"
    gap='30px'
  >
    <Text fontSize="30px" color="white" padding="20px" fontWeight="bold">
      {title}
    </Text>
    <Box >

      {children}
    </Box>
  </Box>
);

export default SideBar;
