import Button from "@/components/Atoms/Button";
import Text from "@/components/Atoms/Text";
import React from "react";

const MyComponent = () => {
  return (
    <div>
      <Text
        color="blue"
        fontSize="16px"
        fontWeight="bold"
        lineHeight="1.5"
        mt="10px"
        mr="20px"
        mb="10px"
        ml="20px"
        paddingTop="5px"
        paddingRight="10px"
        paddingBottom="5px"
        paddingLeft="10px"
      >
        Hello, World!
      </Text>
      <Button size="md">Click Me!</Button>
    </div>
  );
};

export default MyComponent;
