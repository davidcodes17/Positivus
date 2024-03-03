import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ProcessCard from "../components/ProcessCard";

const WorkProcess = () => {
  return (
    <Box mt={100}>
      <Flex flexWrap={{lg : "nowrap", md : "nowrap", sm : "wrap", base : "wrap"}} alignItems={"center"} gap={10}>
        <Heading
          fontSize={50}
          bg={"#B9FF66"}
          width={"fit-content"}
          px={4}
          py={2}
          borderRadius={10}
        >
          Our Working Process
        </Heading>
        <Text width={300}>
          Step-by-Step Guide to Achieving Your Business Goals
        </Text>
      </Flex>

      <Box>
        <ProcessCard />
        <ProcessCard />
        <ProcessCard />
        <ProcessCard />
        <ProcessCard />
        <ProcessCard />
      </Box>
    </Box>
  );
};

export default WorkProcess;
