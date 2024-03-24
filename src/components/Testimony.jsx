import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Testimony = () => {
  return (
    <Box as={motion.div}
    opacity={0}
    transform={"translateY(40px)"}
    whileInView={{
      transform : "translateX(0px)",
      opacity: 1,
      transition: {
        delay: .3,
      },
    }}>
      <Box width={500} border={"2px solid #B9FF66"} borderRadius={20} p={10}>
        <Text color={"#fff"}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          blanditiis illum nobis. Et esse, beatae veritatis totam delectus
          deserunt dolores eligendi sequi ipsam autem laborum neque,
          reprehenderit provident blanditiis illum nobis. Et esse, beatae
          veritatis totam delectus deserunt dolores eligendi sequi ipsam autem
          laborum neque, reprehenderit provident
        </Text>
      </Box>
      <Flex p={5} >
        <Box>
          <Text fontSize={"25px"} color={"#B9FF66"}>John Smith</Text>
          <Text color={"#fff"}>Marketing Director at XYZ Corp</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Testimony;
