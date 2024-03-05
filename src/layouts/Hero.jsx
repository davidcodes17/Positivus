import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Box mt={10}>
      <Flex justifyContent={'space-between'} flexWrap={{lg : "nowrap", md : "nowrap", sm : "wrap", base : "wrap"}} alignItems={'center'}>
        <Box width={{lg : "40vw", md : "40vw", sm : "100%", base : "100%"}}>
          <Heading fontSize={{lg : 70, md : 70, sm : "50px", base: "40px"}}>
            Navigating the digital landscape for success
          </Heading>
          <Text fontSize={{lg : 20, md : 20, sm : "15px", base : "12px"}}>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </Text>
          <Button mt={5} h={"50px"} fontWeight={400} bg={"#191A23"} color={"#fff"} _hover={"none"}>Book a consultation</Button>
        </Box>
        <Image my={{lg : 0, md : 0, sm : 5, base : 10 }} src="/hero-img.svg" />
      </Flex>
    </Box>
  );
}

export default Hero;
