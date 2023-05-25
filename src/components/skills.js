import { Flex, Badge, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const Skills = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Toggle isMobile based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
  
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      handleResize();
    }, []);

    return(
            <Flex p="10px" alignItems="left" 
            justifyContent="center" margin="auto" 
            direction="column" id="about" maxWidth="800px">
                <Heading p="20px 20px 20px 0px" justifyContent="center" display="flex">What I Know</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} textAlign="center">
                    <Box p={4} borderWidth="1px" borderRadius="5px" boxShadow="2px 2px 5px #B799FF">
                        <Heading size="md" display="flex" justifyContent="center">Languages</Heading>
                        <Box>
                            <br/>
                            <SimpleGrid columns={{ base: 3, md: 3 }} spacing={4}>
                            <Badge colorScheme="teal" borderRadius="5px">C++</Badge>
                            <Badge colorScheme="pink" borderRadius="5px">JAVA</Badge>
                            <Badge colorScheme="yellow" borderRadius="5px">Python</Badge>
                            <Badge colorScheme="purple" borderRadius="5px">JavaScript</Badge>
                            <Badge colorScheme="orange" borderRadius="5px">HTML/CSS</Badge>
                            <Badge colorScheme="blue" borderRadius="5px">SQL</Badge>
                            <Badge colorScheme="red" borderRadius="5px">Ruby</Badge>
                            </SimpleGrid>
                        </Box>
                    </Box>
                    <Box p={4} borderWidth="1px" borderRadius="5px" boxShadow="2px 2px 5px #B799FF">
                        <Heading size="md" display="flex" justifyContent="center">Frameworks</Heading>
                        <br/>
                            <SimpleGrid columns={{ base: 3, md: 3 }} spacing={4}>
                                <Badge colorScheme="yellow" borderRadius="5px">React.js</Badge>
                                <Badge colorScheme="orange" borderRadius="5px">Django</Badge>
                                <Badge colorScheme="blue" borderRadius="5px">Rails</Badge>
                                <Badge colorScheme="red" borderRadius="5px">Node.js</Badge>
                                <Badge colorScheme="teal" borderRadius="5px">REST</Badge>
                            </SimpleGrid>
                    </Box>
                </SimpleGrid>
                <br/>
                {isMobile ?
                    (
                        <Box p={4} textAlign="center" borderWidth="1px" borderRadius="5px" boxShadow="2px 2px 5px #B799FF">
                            <Heading size="md" display="flex" justifyContent="center">Tools</Heading>
                            <br/>
                            <SimpleGrid columns={{ base: 3, md: 3 }} spacing={4}>
                                <Badge colorScheme="purple" borderRadius="5px">EC2</Badge>
                                <Badge colorScheme="yellow" borderRadius="5px">Lambda</Badge>
                                <Badge colorScheme="teal" borderRadius="5px">S3</Badge>
                                <Badge colorScheme="red" borderRadius="5px">SES</Badge>
                                <Badge colorScheme="blue" borderRadius="5px">Git</Badge>
                                <Badge colorScheme="orange" borderRadius="5px">Docker</Badge>
                                <Badge colorScheme="green" borderRadius="5px">Maven</Badge>
                                <Badge colorScheme="pink" borderRadius="5px">Heroku</Badge>
                            </SimpleGrid>
                        </Box>
                    ):(
                        <Box p={4} width="50%" ml="25%" textAlign="center" borderWidth="1px" borderRadius="5px" boxShadow="2px 2px 5px #B799FF">
                            <Heading size="md" display="flex" justifyContent="center">Tools</Heading>
                            <br/>
                            <SimpleGrid columns={{ base: 3, md: 3 }} spacing={4}>
                                <Badge colorScheme="purple" borderRadius="5px">EC2</Badge>
                                <Badge colorScheme="yellow" borderRadius="5px">Lambda</Badge>
                                <Badge colorScheme="teal" borderRadius="5px">S3</Badge>
                                <Badge colorScheme="red" borderRadius="5px">SES</Badge>
                                <Badge colorScheme="blue" borderRadius="5px">Git</Badge>
                                <Badge colorScheme="orange" borderRadius="5px">Docker</Badge>
                                <Badge colorScheme="green" borderRadius="5px">Maven</Badge>
                                <Badge colorScheme="pink" borderRadius="5px">Heroku</Badge>
                            </SimpleGrid>
                        </Box>
                    )
                }

            </Flex>


       
    );
}