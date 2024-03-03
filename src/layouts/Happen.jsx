import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Happen = () => {
  return (
    <Box py={"60px"}>
      <Flex justifyContent={"space-between"} py={{lg : 0, md : 0,sm : 20, base : 20}} alignItems={'center'} bg={"#F3F3F3"} px={{lg : 20, md : 20, sm : 10, base: 10}} borderRadius={40}>
        <Box>
          <Heading>Let's make things happen</Heading>
          <Text py={5} fontSize={{lg : 15, md : 15, sm : 12, base : 12}}>
            Contact us today to learn more about how our digital <br />{" "}
            marketing services can help your business grow and <br /> succeed
            online.
          </Text>
          <Button
            height={14}
            bg={"#191A23"}
            color={"#fff"}
            _hover={"none"}
            fontWeight={400}
          >
            Get your free proposal
          </Button>
        </Box>
        <Image src="/happen.svg" display={{lg : "block", md : "block", sm : "none", base : "none"}} />
      </Flex>
    </Box>
  );
};

export default Happen;
