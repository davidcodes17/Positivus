import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const ProcessCard = () => {
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
    }} bg={"#B9FF66"} borderRadius={40} boxShadow={"10px 5px 0px #191A23"} mt={10} p={10}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Flex gap={{lg : 10, md : 10, sm : 5, base : 5}} alignItems={"center"}>
          <Heading fontSize={{lg : "90px", md : "80px", sm : "60px", base : "30px"}}>01</Heading>
          <Heading fontSize={{lg : "50px", md : "40px", sm : "30px", base : "20px"}}>Consultation</Heading>
        </Flex>
        <Box
          border={"3px solid #191A23"}
          cursor={"pointer"}
          bg={"#F3F3F3"}
          display={{lg : "block", md : "block", sm : "none",base : "none"}}
          borderRadius={100}
          px={4}
          py={7}
        >
          <Box width={"30px"} borderRadius={0} height={2} bg={"#191A23"}></Box>
        </Box>
      </Flex>
      <Box width={"100%"} height={"5px"} borderRadius={40} my={7} bg={"#191A23"}></Box>
      <Box>
        <Text fontSize={{lg : 20, md : 20, sm : 15, base : 12}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
          dolore excepturi, porro autem, ut similique nihil eveniet eum
          veritatis consequuntur perspiciatis deleniti? Fugit tempore adipisci
          error perspiciatis eligendi voluptates veniam.
        </Text>
      </Box>
    </Box>
  );
};

export default ProcessCard;
