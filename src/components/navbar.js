import { useEffect, useState } from "react";
import { Flex, Spacer, HStack, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, 
            DrawerOverlay, useDisclosure, Text, Heading } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";


export const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
    }, []);

    return (
        <Flex
        p="10px"
        alignItems="center"
        justifyContent="center"
        margin="auto"
        maxWidth="800px"
        position="sticky"
        pt="30px"
        backgroundColor="#202023"
        color="#f0e7db"
        top="0"
        zIndex="1">
            <HStack spacing="10px">
                <ScrollLink style={{ cursor: 'pointer' }} to="home" spy={true} smooth={true} offset={-90} duration={500}><Heading size='md'>vasuv._</Heading></ScrollLink>
            </HStack>
            <Spacer />
            {isMobile ? (
                <>  
                    <Button variant="ghost" onClick={onOpen} aria-label="Menu"><HamburgerIcon/></Button>
                    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay >
                            <DrawerContent backgroundColor="#202023">
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
                                    <Flex direction="column">
                                        <ScrollLink style={{ cursor: "pointer" }} to="about" spy={true} smooth={true} offset={-30} duration={500} onClick={onClose}>About</ScrollLink>
                                        <br/>
                                        <ScrollLink style={{ cursor: "pointer" }} to="experience" spy={true} smooth={true} offset={-20} duration={500} onClick={onClose}>Experience</ScrollLink>
                                        <br/>
                                        <ScrollLink style={{ cursor: "pointer" }} to="projects" spy={true} smooth={true} offset={-20} duration={500} onClick={onClose}>Projects</ScrollLink>
                                        <br/>
                                        <ScrollLink style={{ cursor: "pointer" }} to="contact" spy={true} smooth={true} offset={-30} duration={1000} onClick={onClose}>Contact</ScrollLink>
                                    </Flex>
                                </DrawerBody>
                            </DrawerContent>
                        </DrawerOverlay>
                    </Drawer>
                </>
            ) : (
            <HStack spacing="20px">
                <ScrollLink style={{ cursor: "pointer" }} to="about" spy={true} smooth={true} offset={-30} duration={500}>About</ScrollLink>
                <ScrollLink style={{ cursor: "pointer" }} to="experience" spy={true} smooth={true} offset={-20} duration={500}>Experience</ScrollLink>
                <ScrollLink style={{ cursor: "pointer" }} to="projects" spy={true} smooth={true} offset={-20} duration={500}>Projects</ScrollLink>
                <ScrollLink style={{ cursor: "pointer" }} to="contact" spy={true} smooth={true} offset={-30} duration={1000}>Contact</ScrollLink>
            </HStack>
      )}
    </Flex>
  );
};