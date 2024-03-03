import { Box, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import { ArrowUp } from "iconsax-react";
import React from "react";

const Card = ({ textColor, textBg, containerBg, icon,upText,downText }) => {
  return (
    <Box
      bg={containerBg}
      boxShadow={"5px 5px 0px #191A23"}
      p={10}
      my={5}
      width={650}
      borderRadius={40}
    >
      <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
        <Box>
          <Heading
            py={2}
            px={3}
            borderRadius={10}
            fontSize={"35px"}
            bg={textBg}
            color={textColor}
          >
            {upText}
          </Heading>
          <Heading
            py={2}
            px={3}
            borderRadius={10}
            fontSize={"35px"}
            bg={textBg}
            color={textColor}
          >
            {downText}
          </Heading>

          <Box mt={20}>
            <Flex alignItems={"center"} gap={5}>
              <IconButton
              bg={textColor}
                transform={"rotate(45deg)"}
                borderRadius={30}
                icon={<ArrowUp color={textBg} />}
                _hover={"none"}
              />
              <Text>Learn More</Text>
            </Flex>
          </Box>
        </Box>
        <Image src={icon} />
      </Flex>
    </Box>
  );
};

export default Card;
