import { Flex, Box, Heading, Image, VStack, HStack } from "@chakra-ui/react";
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
                    <Heading as='h1' size="xl">Vasu Naman Verma</Heading>
                    <br/>
                    <VStack>
                        <Heading as='h3' size='sm' p="0px 20px 20px 0px" style={{marginTop: "0px"}}>Software Engineer</Heading>
                    </VStack>
                    <Box mt="30px">
                        <Image w="320px" h="350px" src={PortraitImage} alt='Progammer Working' />
                    </Box>
                </>
            ):( 
                <>
                    <HStack h="400px">
                    <Box mt="30px">
                        <Image w="320px" h="350px" src={PortraitImage} alt='Progammer Working' />
                    </Box>
                    <VStack style={{marginLeft: "20px"}}>
                        <Heading as='h1' size="xl">Vasu Naman Verma</Heading>
                        <br/>
                        <Heading as='h2' size='md' p="0px 20px 20px 0px" style={{marginTop: "0px"}}>Software Engineer</Heading>
                    </VStack>
                    </HStack>
                </>
                )
            }
        </Flex>
    );
}