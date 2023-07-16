import { Flex, Box, Heading, Image, Text, VStack, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PortraitImage from "../assets/Portrait.png";

export const Home = () => {
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
        justifyContent="center" margin="auto" direction="column" id="home" maxWidth="800px" pt="30px">

            {isMobile ?
            (
                <>
                    {/* <Text width="100%">Hi, I am</Text> */}
                    <Heading as='h1' size="xl">Vasu Naman Verma</Heading>
                    <br/>
                    <VStack>
                        {/* <Text width="100%" ml="20px">A</Text> */}
                        <Heading as='h3' size='sm' p="0px 20px 20px 0px" style={{marginTop: "0px"}}>Software Engineer</Heading>
                    </VStack>
                    <Box mt="30px">
                        <Image w="400px" h="500px" src={PortraitImage} alt='Progammer Working' />
                    </Box>
                </>
            ):( 
                <>
                    {/* <Text width="100%">Hi, I am</Text> */}
                    <HStack>
                    <Box mt="30px">
                        <Image w="400px" h="500px" src={PortraitImage} alt='Progammer Working' />
                    </Box>
                    <VStack>
                        <Heading as='h1' size="xl">Vasu Naman Verma</Heading>
                        <br/>
                        {/* <Text width="100%" ml="20px">A</Text> */}
                        <Heading as='h2' size='md' p="0px 20px 20px 0px" style={{marginTop: "0px"}}>Software Engineer</Heading>
                    </VStack>
                    </HStack>
                    {/* <Heading as='h1' size="3xl">Vasu Naman Verma</Heading> */}
                    {/* <br/> */}
                    {/* <VStack> */}
                        {/* <Text width="100%" ml="20px">A</Text> */}
                        {/* <Heading as='h2' size='md' p="0px 20px 20px 0px" style={{marginTop: "0px"}}>Software Engineer</Heading> */}
                    {/* </VStack> */}
                </>

            )
            }
            {/* <Box mt="30px">
                <Image w="400px" h="500px" src={PortraitImage} alt='Progammer Working' />
            </Box> */}
        </Flex>
    );
}