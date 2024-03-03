import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Case from "../components/Case";

const CaseStudy = () => {
  return (
    <Box>
      <Flex alignItems={"center"} gap={10} flexWrap={{lg : "nowrap", md : "nowrap", sm : "wrap", base : "wrap"}}>
        <Heading
          fontSize={{ lg: 50, md: 40, sm: "40px", base : 40 }}
          bg={"#B9FF66"}
          width={"fit-content"}
          px={4}
          py={2}
          borderRadius={10}
        >
          Case Studies
        </Heading>
        <Text
          width={{ lg: 600, md: 600, sm: 300 }}
          fontSize={{ lg: 15, md: 15, sm: 12, base: 12 }}
        >
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </Text>
      </Flex>
      <Box bg={"#191A23"} mt={10} borderRadius={20}>
        <Flex
          alignItems={"center"}
          width={"100%"}
          // flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
          gap={10}
          overflowX={{
            lg: "hidden",
            md: "hidden",
            sm: "scroll",
            base: "scroll",
          }}
        >
          <Case
            text={
              "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
            }
          />
          <Box
            width={0.5}
            borderRadius={4000}
            height={"100px"}
            bg={"#fff"}
          ></Box>
          <Case
            text={
              "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
            }
          />
          <Box
            width={0.5}
            borderRadius={4000}
            height={"100px"}
            bg={"#fff"}
          ></Box>
          <Case
            text={
              "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
            }
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default CaseStudy;
