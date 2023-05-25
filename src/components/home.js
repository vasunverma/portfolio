import { Flex, Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

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
        justifyContent="center" margin="auto" direction="column" id="home" maxWidth="800px">
            <Box>
                {/* <Image src={ProgrammerWorking} alt='Progammer Working' /> */}
            </Box>
            {isMobile ?
            (
                <>
                    <Text width="100%">Hi, I am</Text>
                    <Heading as='h1' size="2xl">Vasu Naman Verma</Heading>
                    <br/>
                    <VStack>
                        {/* <Text width="100%" ml="20px">A</Text> */}
                        <Heading as='h3' size='sm' pl="20px" style={{marginTop: "0px"}}>Software Engineer & Web Developer.</Heading>
                    </VStack>
                </>
            ):( 
                <>
                    <Text width="100%">Hi, I am</Text>
                    <Heading as='h1' size="4xl">Vasu Naman Verma</Heading>
                    <br/>
                    <VStack>
                        {/* <Text width="100%" ml="20px">A</Text> */}
                        <Heading as='h2' size='md' pl="20px" style={{marginTop: "0px"}}>Software Engineer & Web Developer.</Heading>
                    </VStack>
                </>

            )
            }
        </Flex>
    );
}