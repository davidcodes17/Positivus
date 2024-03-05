import { Box, Button, CloseButton, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "../components/Logo";
import { HambergerMenu } from "iconsax-react";

const Header = () => {
  const [dis, setDis] = useState("none");
  return (
    <Box>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Logo />
        <Flex
          display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
          alignItems={"center"}
          gap={10}
        >
          <Text>About us</Text>
          <Text>Services</Text>
          <Text>Use Case</Text>
          <Text>Pricing</Text>
          <Text>Blog</Text>
          <Button
            fontWeight={400}
            bg={"none"}
            _hover={"none"}
            border={"1px solid #191A23"}
          >
            Request a quote
          </Button>
        </Flex>
        <Box
          onClick={() => {
            setDis("block");
          }}
          cursor={"pointer"}
          display={{ lg: "none", md: "none", sm: "block", base: "block" }}
        >
          <HambergerMenu size={50} />
        </Box>
      </Flex>
      <Box
        pos={"fixed"}
        zIndex={999}
        display={dis}
        bg={"#fff"}
        left={0}
        top={0}
        width={"100vw"}
        height={"100vh"}
        p={{ lg: 20, md: 20, sm: 10, base: 10 }}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Logo />
          <CloseButton onClick={()=>{
            setDis("none")
          }} />
        </Flex>
        <Box lineHeight={"50px"} mt={10}>
          <Text>About us</Text>
          <Text>Services</Text>
          <Text>Use Case</Text>
          <Text>Pricing</Text>
          <Text>Blog</Text>
          <Button
            fontWeight={400}
            bg={"none"}
            _hover={"none"}
            border={"1px solid #191A23"}
          >
            Request a quote
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
