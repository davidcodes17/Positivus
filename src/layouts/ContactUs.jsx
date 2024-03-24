import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const ContactUs = () => {
  return (
    <Box mt={200} >
      <Flex as={motion.div}
        opacity={0}
        transform={"translateY(40px)"}
        whileInView={{
          transform : "translateX(0px)",
          opacity: 1,
          transition: {
            delay: .3,
          },
        }} alignItems={"center"} flexWrap={{lg : "nowrap", md : "nowrap", sm : "wrap", base : "wrap"}} gap={10}>
        <Heading
          fontSize={50}
          bg={"#B9FF66"}
          width={"fit-content"}
          px={4}
          py={2}
          borderRadius={10}
        >
          Contact Us
        </Heading>
        <Text width={300}>
          Step-by-Step Guide to Achieving Your Business Goals
        </Text>
      </Flex>

      <Box mt={50} bg={"#F3F3F3"} p={{lg : 20, md : 20, sm  :10, base : 10}} borderRadius={40}>
        <Flex alignItems={"center"} justifyContent={"left"} pos={"relative"}>
          <Box width={800}>
            <RadioGroup as={Flex} gap={5}>
              <Radio>Say Hi</Radio>
              <Radio>Get a Quote</Radio>
            </RadioGroup>
            <FormControl pt={5}>
              <FormLabel>Name</FormLabel>
              <Input py={6} placeholder="Name" type="text" bg={"#fff"} />
            </FormControl>
            <FormControl pt={5}>
              <FormLabel>Email</FormLabel>
              <Input py={6} placeholder="Email" type="email" bg={"#fff"} />
            </FormControl>
            <FormControl pt={5}>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Message" bg={"#fff"} />
            </FormControl>
            <Button
              height={"60px"}
              width={"100%"}
              mt={5}
              bg={"#191A23"}
              color={"#fff"}
              _hover={"none"}
              borderRadius={20}
            >
              Send Message
            </Button>
          </Box>
          {/* <Image
            pos={"absolute"}
            right={-60}
            width={400}
            src="/Mask group.svg"
          /> */}
        </Flex>
      </Box>
    </Box>
  );
};

export default ContactUs;
