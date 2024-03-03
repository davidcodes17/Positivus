import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Testimony from "../components/Testimony";

const Testimonials = () => {
  return (
    <Box mt={200}>
      <Flex flexWrap={{lg : "nowrap", md : "nowrap", sm : "wrap", base : "wrap"}} alignItems={"center"} gap={10}>
        <Heading
          fontSize={50}
          bg={"#B9FF66"}
          width={"fit-content"}
          px={4}
          py={2}
          borderRadius={10}
        >
          Testimonials
        </Heading>
        <Text width={300}>
          Step-by-Step Guide to Achieving Your Business Goals
        </Text>
      </Flex>

      <Flex overflowX={"scroll"} gap={10} mt={10} borderRadius={40} bg={"#191A23"} p={20}>
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
      </Flex>
    </Box>
  );
};

export default Testimonials;
