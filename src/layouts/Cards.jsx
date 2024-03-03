import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Card from '../components/Card'

const Cards = () => {
  return (
    <Box>
        <Flex pt={10} justifyContent={'space-between'} flexWrap={"wrap"}>
            <Card textColor={"#000000"}upText={"Search Engine"} downText={"optimization"} textBg={"#B9FF66"} containerBg={"#F3F3F3"} icon={"/search.svg"} />
            <Card textColor={"#000000"}upText={"Pay-per-click"} downText={"advertising"} textBg={"#fff"} containerBg={"#B9FF66"} icon={"/payperclick.svg"} />
            <Card textColor={"#000000"}upText={"Social Media"} downText={"Marketing"} textBg={"#fff"} containerBg={"#191A23"} icon={"/social.svg"} />
            <Card textColor={"#000000"}upText={"Email"} downText={"Marketing"} textBg={"#B9FF66"} containerBg={"#F3F3F3"} icon={"/messages.svg"} />
            <Card textColor={"#000000"}upText={"Content"} downText={"Creation"} textBg={"#fff"} containerBg={"#B9FF66"} icon={"/content.svg"} />
            <Card textColor={"#000000"}upText={"Analytics and"} downText={"Tracking"} textBg={"#fff"} containerBg={"#191A23"} icon={"/analytics.svg"} />
        </Flex>
    </Box>
  )
}

export default Cards