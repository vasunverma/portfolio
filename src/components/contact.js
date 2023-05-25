import { useClipboard, Flex, Text, Heading, IconButton, useColorModeValue, 
        Link, Stack, Tooltip} from "@chakra-ui/react";
import { BsGithub, BsLinkedin} from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';


export const Contact = () => {

    const { hasCopied, onCopy } = useClipboard('vermavasun@gmail.com');
    
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
                <Text color="grey">© 2023 Vasu Naman Verma. All Rights Reserved.</Text>
            </Flex>
        );
}