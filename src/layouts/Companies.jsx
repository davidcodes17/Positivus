import { Box, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Companies = () => {
  return (
    <Box py={5} as={motion.div} transform={"translateY(30px)"} opacity={0} whileInView={{
      opacity : 1,
      transform : "translateY(0px)",
      transition : {
        delay : 1.3
      }
    }}>
      <Flex
        justifyContent={"space-between"}
        gap={{lg : "none", md : "none", sm : 10, base : "10"}}
        overflowX={{ lg: "hidden", md: "hidden", sm: "scroll", base: "scroll" }}
      >
        <Image src="/amazon.svg" />
        <Image src="/dribble.svg" />
        <Image src="/hubspot.svg" />
        <Image src="/notion.svg" />
        <Image src="/netflix.svg" />
        <Image src="/zoom.svg" />
      </Flex>
    </Box>
  );
};

export default Companies;
