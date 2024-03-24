import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import TeamMember from "../components/TeamMember";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <Box mt={200}>
      <Flex
        flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
        alignItems={"center"}
        gap={10}
        as={motion.div}
        opacity={0}
        transform={"translateY(40px)"}
        whileInView={{
          transform : "translateX(0px)",
          opacity: 1,
          transition: {
            delay: .3,
          },
        }}
      >
        <Heading
          fontSize={50}
          bg={"#B9FF66"}
          width={"fit-content"}
          px={4}
          py={2}
          borderRadius={10}
        >
          Team
        </Heading>
        <Text width={300}>
          Step-by-Step Guide to Achieving Your Business Goals
        </Text>
      </Flex>

      <Box>
        <Grid
          gridTemplateColumns={{
            lg: "1fr 1fr 1fr",
            md: "1fr 1fr 1fr",
            sm: "1fr",
            base: "1fr",
          }}
          justifyContent={"center"}
        >
          <TeamMember
            image={"/Picture (1).svg"}
            name={"Jane Doe"}
            position={"Director of Operations"}
            bio={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, neque pariatur. Exercitationem at sed sequi aut provident, nam ut sapiente ullam iste, facilis, hic et sint ipsa? Nam, odio quae!"
            }
          />
          <TeamMember
            image={"/Picture (2).svg"}
            name={"Jane Doe"}
            position={"Director of Operations"}
            bio={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, neque pariatur. Exercitationem at sed sequi aut provident, nam ut sapiente ullam iste, facilis, hic et sint ipsa? Nam, odio quae!"
            }
          />
          <TeamMember
            image={"/Picture (3).svg"}
            name={"Jane Doe"}
            position={"Director of Operations"}
            bio={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, neque pariatur. Exercitationem at sed sequi aut provident, nam ut sapiente ullam iste, facilis, hic et sint ipsa? Nam, odio quae!"
            }
          />
          <TeamMember
            image={"/Picture (4).svg"}
            name={"Jane Doe"}
            position={"Director of Operations"}
            bio={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, neque pariatur. Exercitationem at sed sequi aut provident, nam ut sapiente ullam iste, facilis, hic et sint ipsa? Nam, odio quae!"
            }
          />
          <TeamMember
            image={"/Picture (5).svg"}
            name={"Jane Doe"}
            position={"Director of Operations"}
            bio={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, neque pariatur. Exercitationem at sed sequi aut provident, nam ut sapiente ullam iste, facilis, hic et sint ipsa? Nam, odio quae!"
            }
          />
          <TeamMember
            image={"/Picture.svg"}
            name={"Jane Doe"}
            position={"Director of Operations"}
            bio={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, neque pariatur. Exercitationem at sed sequi aut provident, nam ut sapiente ullam iste, facilis, hic et sint ipsa? Nam, odio quae!"
            }
          />
        </Grid>
      </Box>
      <Flex
        justifyContent={{
          lg: "right",
          md: "right",
          sm: "center",
          base: "center",
        }}
        mt={10}
        mr={{ lg: "50px", md: "50px", sm: 0, base: 0 }}
      >
        <Button
          height={"60px"}
          width={200}
          bg={"#000"}
          color={"#fff"}
          borderRadius={"20px"}
          _hover={"none"}
        >
          See all teams
        </Button>
      </Flex>
    </Box>
  );
};

export default Team;
