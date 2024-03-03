import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import Companies from "../layouts/Companies";
import Services from "../layouts/Services";
import Happen from "../layouts/Happen";
import CaseStudy from "../layouts/CaseStudy";
import WorkProcess from "../layouts/WorkProcess";
import Team from "../layouts/Team";
import Testimonials from "../layouts/Testimonials";
import ContactUs from "../layouts/ContactUs";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
   <Box pt={5} px={{lg : 20, md : 10, sm : 2, base : 5}}>
    <Header />
    <Hero />
    <Companies />
    <Services />
    <Happen />
    <CaseStudy />
    <WorkProcess />
    <Team />
    <Testimonials />
    <ContactUs />
    <Footer />
   </Box>
  );
};

export default Home;
