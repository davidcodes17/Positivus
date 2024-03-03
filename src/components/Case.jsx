import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { ArrowUp } from "iconsax-react";
import React from "react";

const Case = ({ text }) => {
  return (
    <Box p={20} width={"1200px"}>
      <Text color={"#fff"}>
        For a local restaurant, we implemented a targeted PPC campaign that
        resulted in a 50% increase in website traffic and a 25% increase in
        sales.
      </Text>
      <Flex gap={5} alignItems={"center"}>
        <Text color={"#B9FF66"}>Learn more</Text>
        <IconButton
          transform={"rotate(45deg)"}
          bg={"none"}
          icon={<ArrowUp color="#B9FF66" />}
        />
      </Flex>
    </Box>
  );
};

export default Case;
