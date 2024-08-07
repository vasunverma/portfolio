import { useClipboard, Flex, Text, Heading, IconButton, useColorModeValue, 
        Link, Stack, Tooltip, Icon} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsGithub, BsLinkedin} from 'react-icons/bs';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { SiChakraui } from "react-icons/si";
import { MdEmail } from 'react-icons/md';
import { useEffect, useState } from "react";

export const Contact = () => {

    const { hasCopied, onCopy } = useClipboard('vermavasun@gmail.com');
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
      }, []);
    
    return(
            <Flex p="10px" alignItems="center" 
            justifyContent="center" margin="auto" 
            direction="column" id="contact" maxWidth="800px">
                {/* <Divider p="10px"/> */}
                <Heading p="20px 20px 20px 0px">Get In Touch</Heading>
                
                <Stack
                align="center"
                justify="space-around"
                direction={{ base: 'row', md: 'row' }}>
                    <Tooltip
                        label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                        closeOnClick={false}
                        hasArrow>
                        <IconButton
                        aria-label="email"
                        variant="ghost"
                        size="lg"
                        color="white"
                        fontSize="3xl"
                        icon={<MdEmail />}
                        _hover={{
                            bg: 'blue.500',
                            color: useColorModeValue('white', 'gray.700'),
                        }}
                        onClick={onCopy}
                        isRound
                        />
                    </Tooltip>

                    <Link href="https://github.com/VasuNVerma/">
                        <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        color="white"
                        fontSize="3xl"
                        icon={<BsGithub />}
                        _hover={{
                            bg: 'blue.500',
                            color: useColorModeValue('white', 'gray.700'),
                        }}
                        isRound
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/vasunverma/">
                        <IconButton
                        aria-label="linkedin"
                        variant="ghost"
                        size="lg"
                        color="white"
                        icon={<BsLinkedin size="28px" />}
                        _hover={{
                            bg: 'blue.500',
                            color: useColorModeValue('white', 'gray.700'),
                        }}
                        isRound
                        />
                    </Link>
                </Stack>
                <br/>
                {isMobile ? (
                    <Text fontSize="20px">
                    Made with ❤️ using <FontAwesomeIcon icon={faReact} style={{ color: "#d121c9" }} /> + <Icon as={SiChakraui}  style={{ color: "#d121c9", marginBottom: "-3px" }} />
                    </Text>
                ): (
                    <Text fontSize="20px">
                    Made with ❤️ using <FontAwesomeIcon icon={faReact} style={{ color: "#d121c9" }} /> + <Icon as={SiChakraui}  style={{ color: "#d121c9", marginBottom: "-3px" }} />
                    </Text>
                )}
                <br/>
                {isMobile ? (
                    <Text fontSize="10px" color="grey">© 2024 Vasu Naman Verma. All Rights Reserved.</Text>
                ): (
                    <Text color="grey">© 2024 Vasu Naman Verma. All Rights Reserved.</Text>
                )}
            </Flex>
        );
}