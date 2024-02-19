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
    height="400px"
    borderRadius={borderRadius || 30}
    backgroundColor="#fff"
    padding="40px"
    display="flex"
    justifyContent="flex-start"
    alignItems="flex-start"
    flexDirection="column"
    gap="30px"
    data-testid="SideBarBox"
    style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
  >
    <Text fontSize="28px" color="#7b61da" padding="20px" fontWeight="bold">
      {title}
    </Text>
    <Box width="100%" style={{ marginRight: "100px" }}>
      {children}
    </Box>
  </Box>
);

export default SideBar;
