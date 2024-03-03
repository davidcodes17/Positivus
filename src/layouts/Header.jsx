import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../components/Logo'
import { HambergerMenu } from 'iconsax-react'

const Header = () => {
  return (
    <Box>
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <Logo />
      <Flex display={{lg : "flex", md : "flex", sm : "none", base : "none"}} alignItems={'center'} gap={10}>
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
      <Box display={{lg : "none", md : "none", sm : "block", base : "block"}}><HambergerMenu size={50} /></Box>
    </Flex>
  </Box>
  )
}

export default Header