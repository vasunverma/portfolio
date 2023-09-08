import { useEffect, useState } from "react";
import { Flex, Spacer, VStack, HStack, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, 
            DrawerOverlay, useDisclosure, Text, Heading } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";


export const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isMobile, setIsMobile] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setScrolling(true);
          } else {
            setScrolling(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navbarStyleMobile = {
        position: "fixed",
        top: "0",
        right: "0",
        zIndex: "1",
        margin: "24px",
    };


    return (
            isMobile ? (
                <Flex
                    p="10px"
                    alignItems="center"
                    justifyContent="center"
                    margin="auto"
                    maxWidth="800px"
                    pt="30px"
                    >

                    <HStack spacing="10px">
                        <ScrollLink style={{ cursor: 'pointer' }} to="home" spy={true} smooth={true} offset={-90} duration={500}><Heading size='md'>vasuv._</Heading></ScrollLink>
                    </HStack>
                    <Spacer />
                    <Button style={navbarStyleMobile} backgroundColor={scrolling ? '#202023' : ''} variant="ghost" color="#f0e7db" onClick={onOpen} aria-label="Menu"><HamburgerIcon/></Button>
                    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay >
                            <DrawerContent opacity="0.9" backgroundColor="#202023" color="#f0e7db">
                                <DrawerHeader>
                                    <HStack>
                                        <Text>Menu</Text>
                                        <Spacer />
                                        <Button variant="ghost" onClick={onClose} aria-label="Close">
                                        <CloseIcon />
                                        </Button>
                                    </HStack>
                                </DrawerHeader>
                                <DrawerBody>
                                    <Flex direction="column" >
                                        <ScrollLink style={{ cursor: "pointer", paddingBottom: "20px" }} to="about" spy={true} smooth={true} offset={-50} duration={500} onClick={onClose}>About</ScrollLink>
                                        <br/>
                                        <ScrollLink style={{ cursor: "pointer", paddingBottom: "20px"  }} to="skills" spy={true} smooth={true} offset={-50} duration={500} onClick={onClose}>Skills</ScrollLink>
                                        <br/>
                                        <ScrollLink style={{ cursor: "pointer", paddingBottom: "20px"  }} to="experience" spy={true} smooth={true} offset={-50} duration={500} onClick={onClose}>Experience</ScrollLink>
                                        <br/>
                                        <ScrollLink style={{ cursor: "pointer", paddingBottom: "20px"  }} to="projects" spy={true} smooth={true} offset={-50} duration={500} onClick={onClose}>Projects</ScrollLink>
                                        <br/>
                                        <ScrollLink style={{ cursor: "pointer", paddingBottom: "20px"  }} to="contact" spy={true} smooth={true} offset={-50} duration={1000} onClick={onClose}>Contact</ScrollLink>
                                    </Flex>
                                </DrawerBody>
                            </DrawerContent>
                        </DrawerOverlay>
                    </Drawer>
                </Flex>
            ) : (
            <Flex
                p="10px"
                flexDirection="column"
                position= "fixed"
                left="40px"
                top="0"
                pt="30px"
                zIndex="1"
                >
                <VStack spacing="10px">
                    <ScrollLink style={{ cursor: 'pointer' }} to="home" spy={true} smooth={true} offset={-90} duration={500}><Heading size='md'>vasuv._</Heading></ScrollLink>
                </VStack>
                <Spacer />   
                <VStack spacing="20px" marginTop="100px">
                    <ScrollLink style={{ cursor: "pointer" }} to="about" spy={true} smooth={true} offset={-30} duration={500}>About</ScrollLink>
                    <ScrollLink style={{ cursor: "pointer" }} to="skills" spy={true} smooth={true} offset={-30} duration={500}>Skills</ScrollLink>
                    <ScrollLink style={{ cursor: "pointer" }} to="experience" spy={true} smooth={true} offset={-30} duration={500}>Experience</ScrollLink>
                    <ScrollLink style={{ cursor: "pointer" }} to="projects" spy={true} smooth={true} offset={-30} duration={500}>Projects</ScrollLink>
                    <ScrollLink style={{ cursor: "pointer" }} to="contact" spy={true} smooth={true} offset={-30} duration={1000}>Contact</ScrollLink>
                </VStack>
            </Flex>
      )
  );
};