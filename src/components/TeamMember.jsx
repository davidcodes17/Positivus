import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { Facebook } from "iconsax-react";
import React from "react";

const TeamMember = ({ image, name, position, bio }) => {
  return (
    <Box
      p={10}
      my={5}
      pos={"relative"}
      boxShadow={"5px 10px 0px #191A23"}
      borderRadius={40}
      width={{lg : 400, md : 400, sm : "100%", base : "100%"}}
    >
      <IconButton
        icon={<Facebook color="#fff" variant="Bold" />}
        borderRadius={50}
        pos={"absolute"}
        right={8}
        _hover={"none"}
        top={10}
        bg={"#191A23"}
      />
      <Box>
        <Flex alignItems={"center"} gap={5}>
          <Image src={image} />
          <Box>
            <Text fontSize={"30px"}>{name}</Text>
            <Text>{position}</Text>
          </Box>
        </Flex>

        <Box my={5} width={"100%"} h={1} bg={"#191A23"} borderRadius={10}></Box>
        <Box>
          <Text>{bio}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default TeamMember;
