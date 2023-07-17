import { Flex, Badge, Link, Box, Wrap, Heading, SimpleGrid, VStack, HStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import "../stylesheets/skills.css";

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
            direction="column" id="skills" maxWidth="800px">
                <Heading p="20px 20px 30px 0px" justifyContent="center" display="flex">What I Know</Heading>
                <VStack mb="30px">
                    <Heading size="md" mb="20px" display="flex" justifyContent="center">Full Stack Development</Heading>
                    <Wrap spacing="20px" justify="center" w="400px">
                        <span className="developmentTags">C++</span>
                        <span className="developmentTags">JAVA</span>
                        <span className="developmentTags">Python</span>
                        <span className="developmentTags">JavaScript</span>
                        <span className="developmentTags">PostgreSQL</span>
                        <span className="developmentTags">HTML</span>
                        <span className="developmentTags">CSS</span>
                        <span className="developmentTags">Django</span>
                        <span className="developmentTags">NodeJS</span>
                        <span className="developmentTags">React</span>
                        <span className="developmentTags">REST</span>
                        <span className="developmentTags">Heroku</span>
                        <span className="developmentTags">Git</span>
                    </Wrap>
                </VStack>
                <VStack>
                    <Heading size="md" mb="20px" display="flex" justifyContent="center">Certifications</Heading>
                    <span className="certificationTags">AWS Certified Cloud Practitioner 
                    <a style={{marginLeft: "10px"}} href="https://www.credly.com/badges/ad76621a-8d7c-4d45-a296-d308598e6cd9/public_url" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faSquareArrowUpRight} style={{color: "#d121c9"}} />
                    </a>
                    </span>
                </VStack>
{/*                 
                {isMobile ?
                    (
                        <Box p={4} mb="15px" textAlign="center" borderWidth="1px" borderRadius="5px" boxShadow="2px 2px 5px #B799FF">
                            <Heading size="md" display="flex" justifyContent="center">Certifications</Heading>
                            <br/>
                            <SimpleGrid columns={{ base: 1, md: 1 }} spacing={4}>
                                <Badge colorScheme="purple" borderRadius="5px">AWS Certified Cloud Practitioner</Badge>
                                <Badge colorScheme="yellow" borderRadius="5px">AWS Certified Developer Associate</Badge>
                            </SimpleGrid>
                        </Box>
                    ):(
                        <Box p={4} mb="25px" width="50%" ml="25%" textAlign="center" borderWidth="1px" borderRadius="5px" boxShadow="2px 2px 5px #B799FF">
                            <Heading size="md" display="flex" justifyContent="center">Certifications</Heading>
                            <br/>
                            <SimpleGrid columns={{ base: 1, md: 1 }} spacing={4}>
                                <Badge colorScheme="purple" borderRadius="5px">AWS Certified Cloud Practitioner</Badge>
                                <Badge colorScheme="yellow" borderRadius="5px">AWS Certified Developer Associate</Badge>
                            </SimpleGrid>
                        </Box>
                    )
                }

                
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
                {isMobile ?
                    (
                        <Box p={4} mt="15px" textAlign="center" borderWidth="1px" borderRadius="5px" boxShadow="2px 2px 5px #B799FF">
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
                        <Box p={4} mt="25px" width="50%" ml="25%" textAlign="center" borderWidth="1px" borderRadius="5px" boxShadow="2px 2px 5px #B799FF">
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
                } */}

            </Flex>


       
    );
}