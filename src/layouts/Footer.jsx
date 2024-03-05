import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import { Facebook, Instagram, Twitch, Whatsapp } from "iconsax-react";

const Footer = () => {
  return (
    <Box
      p={{ lg: 20, md: 20, sm: 10, base: 10 }}
      mt={200}
      borderTopRadius={40}
      bg={"#191A23"}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box filter={"invert()"}>
          <Logo />
        </Box>
        <Flex
          display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
          gap={10}
          alignItems={"center"}
        >
          <Text color={"#fff"} textDecoration={"underline"}>
            About Us
          </Text>
          <Text color={"#fff"} textDecoration={"underline"}>
            Services
          </Text>
          <Text color={"#fff"} textDecoration={"underline"}>
            Use Cases
          </Text>
          <Text color={"#fff"} textDecoration={"underline"}>
            Pricing
          </Text>
          <Text color={"#fff"} textDecoration={"underline"}>
            Blog
          </Text>
        </Flex>
        <Flex>
          <Flex
            gap={2}
            display={{ lg: "flex", md: "flex", sm: "flex", base: "none" }}
          >
            <Facebook color="#fff" variant="Bold" size={30} />
            <Twitch color="#fff" variant="Bold" size={30} />
            <Instagram color="#fff" variant="Bold" size={30} />
            <Whatsapp color="#fff" variant="Bold" size={30} />
          </Flex>
        </Flex>
      </Flex>

      <Flex alignItems={"center"} flexWrap={"wrap"} gap={20}>
        <Box mt={10}>
          <Heading
            bg={"#B9FF66"}
            width={"fit-content"}
            px={2}
            py={1}
            mb={5}
            fontSize={20}
            borderRadius={10}
          >
            Contact Us:
          </Heading>
          <Text color={"#fff"}>Email : info@positivus.com</Text>
          <Text py={3} color={"#fff"}>
            Phone : 555-567-8901
          </Text>

          <Box>
            <Text color={"#fff"}>
              Address : 1234 Main St <br /> Moonstone City, Stardust State 12345
            </Text>
          </Box>
        </Box>
        <Box
          p={{ lg: 10, md: 10, sm: 5, base: 7}}
          borderRadius={20}
          className="white"
          height={"fit-content"}
        >
          <Flex gap={5} flexWrap={"wrap"}>
            <Input
              color={"#fff"}
              width={{ lg: 300, md: 300, sm: "100%", sm: "100%" }}
              placeholder="Email"
              height={"60px"}
            />
            <Button
              width={200}
              _hover={"none"}
              bg={"#B9FF66"}
              height={"60px"}
              borderRadius={"10px"}
            >
              Subscribe to news
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Box height={"100%"} h={2} my={10} bg={"#fff"} borderRadius={10}></Box>
      <Text color={"#fff"}>
        &copy; 2023 Positivus. All Rights Reserved. Privacy Policy
      </Text>
    </Box>
  );
};

export default Footer;
