import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Cards from "./Cards";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <Box pt={20}>
      <Flex
        as={motion.div}
        opacity={0}
        transform={"translateY(40px)"}
        whileInView={{
          transform : "translateX(0px)",
          opacity: 1,
          transition: {
            delay: .3,
          },
        }}
        alignItems={"center"}
        flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
        gap={10}
      >
        <Heading
          fontSize={50}
          bg={"#B9FF66"}
          width={"fit-content"}
          px={4}
          borderRadius={10}
        >
          Services
        </Heading>
        <Text width={{ lg: 600, md: 600, sm: 300, base: 300 }}>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </Text>
      </Flex>
      <Cards />
    </Box>
  );
};

export default Services;
