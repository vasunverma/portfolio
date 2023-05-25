import { Flex, Heading, Text, Code, Spacer, HStack, 
         Accordion, Image, AccordionButton, AccordionPanel, 
         AccordionItem, AccordionIcon, Box, Icon, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLocationDot, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import AmdocsLogo from "../assets/Amdocs.jpg";
import OYOLogo from "../assets/Oyo.png";
import { useEffect, useState } from "react";

export const Experience = () => {

    const [isMobile, setIsMobile] = useState(false);

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
        direction="column" id="experience" maxWidth="800px">
            {/* <Divider p="10px"/> */}
            <Heading p="20px 20px 20px 0px" justifyContent="center" display="flex">Where I’ve Worked</Heading>
            {/* <Accordion allowToggle>
                <AccordionItem mb={4} border="none" >
                    <AccordionButton  _hover={{}} backgroundColor="#740cdc" borderRadius="10px">
                        <Box><Text fontSize="10px"> Software Engineer @ Amdocs </Text></Box>
                        <Spacer />  
                        <Box><Text fontSize="10px">2020 - 2022</Text></Box>
                        <Box>   <Icon as={AccordionIcon} /></Box>
                    </AccordionButton>
                    <AccordionPanel mt="20px" p={4} backgroundColor="#241d41" borderRadius="10px"> */}
                    <Accordion allowToggle>
                    {isMobile ?
                        (   
                            <>
                                
                                    <AccordionItem mb={4} border="none" >
                                        <AccordionButton  _hover={{}} backgroundColor="#740cdc" borderRadius="10px">
                                            <Box><Text fontSize="10px"> Software Engineer @ Amdocs </Text></Box>
                                            <Spacer />  
                                            <Box><Text fontSize="10px">2020 - 2022</Text></Box>
                                            <Box display="flex">   <Icon as={AccordionIcon} /></Box>
                                        </AccordionButton>
                                        <AccordionPanel mt="20px" p={4} backgroundColor="#241d41" borderRadius="10px">
                                            <VStack>
                                                <Box w = "100%" ml="0px">   
                                                    <Image w="20%" borderRadius="lg" src={AmdocsLogo} alt="Amdocs Logo" />
                                                </Box>
                                                <Box textAlign="justify" justifyContent="center" w="100%">
                                                    <VStack>
                                                        <Box w="100%">
                                                            <HStack direction='row' w="100%">
                                                            <FontAwesomeIcon icon={faLocationDot} style={{color: "#d121c9",}} />
                                                                <Text>Gurgaon, India</Text>
                                                                <div/>
                                                                <Link href="https://www.amdocs.com"><FontAwesomeIcon icon={faSquareArrowUpRight} style={{color: "#d121c9",}} /> amdocs.com</Link>
                                                            </HStack>
                                                        </Box>
                                                        <Spacer />
                                                        <Box>
                                                            As part of the CRM Dev team, my role included developing User interfaces and back-end logic, 
                                                            creating APIs , third party integration with existing client services, Database schema designing, 
                                                            client data-gathering and its implementation for future iterations.
                                                        </Box>
                                                        <Spacer />
                                                        <Box w="100%">
                                                                <Code m="5px" colorScheme="blue" children="JAVA" />
                                                                <Code m="5px" colorScheme="red" children="Swing" />
                                                                <Code m="5px" colorScheme="teal" children="SQL" />
                                                                <Code m="5px" colorScheme="pink" children="XML" />
                                                                <Code m="5px" colorScheme="orange" children="MAVEN" />
                                                                <Code m="5px" colorScheme="purple" children="SOAP" />
                                                        </Box>
                                                    </VStack>
                                                    </Box>
                                                </VStack>
                                            </AccordionPanel>
                                        </AccordionItem>
                                </>
                        ) : (
                            <>
                                    <AccordionItem mb={4} border="none" >
                                    <AccordionButton  _hover={{}} backgroundColor="#740cdc" borderRadius="10px">
                                        <Box><Text> Software Engineer @ Amdocs </Text></Box>
                                        <Spacer />  
                                        <Box><Text>2020 - 2022</Text></Box>
                                        <Box>   <Icon as={AccordionIcon} /></Box>
                                    </AccordionButton>
                                <AccordionPanel mt="20px" p={4} backgroundColor="#241d41" borderRadius="10px">
                            <HStack>
                                <Box w="80%" textAlign="justify" justifyContent="center">
                                    <VStack>
                                        <Box w="100%">
                                            <HStack direction='row' w="100%">
                                            <FontAwesomeIcon icon={faLocationDot} style={{color: "#9827a5",}} />
                                                <Text>Gurgaon, India</Text>
                                                <div/>
                                                <Link href="https://www.amdocs.com"><FontAwesomeIcon icon={faSquareArrowUpRight} style={{color: "#d121c9",}} /> amdocs.com</Link>
                                            </HStack>
                                        </Box>
                                        <Spacer />
                                        <Box>
                                            As part of the CRM Dev team, my role included developing User interfaces and back-end logic, 
                                            creating APIs , third party integration with existing client services, Database schema designing, 
                                            client data-gathering and its implementation for future iterations.
                                        </Box>
                                        <Spacer />
                                        <Box w="100%">
                                            <HStack direction='row'>
                                                <Code colorScheme="blue" children="JAVA" />
                                                <Code colorScheme="red" children="Swing" />
                                                <Code colorScheme="teal" children="SQL" />
                                                <Code colorScheme="pink" children="XML" />
                                                <Code colorScheme="orange" children="MAVEN" />
                                                <Code colorScheme="purple" children="SOAP" />
                                            </HStack>
                                        </Box>
                                    </VStack>
                                </Box>
                                <Box w="18%">   
                                    <Image borderRadius="lg" src={AmdocsLogo} alt="Amdocs Logo" />
                                </Box>
                            </HStack>
                            </AccordionPanel>
                            </AccordionItem>
                            </>
                        )}
                        


                    {isMobile ? 
                        (   
                            <>
                                            <AccordionItem mb={4} border="none" >
                    <AccordionButton  _hover={{}} backgroundColor="#740cdc" borderRadius="10px">
                        <Box><Text fontSize="10px"> Software Engineer Intern @ OYO Rooms </Text></Box>
                        <Spacer />  
                        <Box><Text fontSize="10px">2020 - 2020</Text></Box>
                        <Box display="flex"><Icon as={AccordionIcon} /></Box>
                    </AccordionButton>
                    <AccordionPanel mt="20px" p={4} backgroundColor="#241d41" borderRadius="10px">
                            <VStack>
                                <Box w="100%" ml="0px">
                                    <Image w="20%" src={OYOLogo} alt="OYO Logo" />
                                </Box>
                                <Box textAlign="justify" justifyContent="center" w="100%">
                                    <VStack >
                                        <Box w="100%">
                                            <HStack direction='row' w="100%">
                                            <FontAwesomeIcon icon={faLocationDot} style={{color: "#9827a5",}} />
                                                <Text>Gurgaon, India</Text>
                                                <div/>
                                                <Link href="https://www.oyorooms.com/"><FontAwesomeIcon icon={faSquareArrowUpRight} style={{color: "#d121c9",}} /> oyorooms.com</Link>
                                            </HStack>
                                        </Box>
                                        <Spacer />
                                        <Box>
                                            I worked on Invoice and Finance Dev team and my role included developing APIs for internal usage, 
                                            automating manual task of feeding invoice data into system 
                                            and create new templates for invoices as the company expanded to new regions.
                                        </Box>
                                        <Spacer />
                                        <Box w="100%">
                                                <Code m="5px" colorScheme="blue" children="Ruby" />
                                                <Code m="5px" colorScheme="red" children="Rails" />
                                                <Code m="5px" colorScheme="teal" children="PostgreSQL" />
                                                <Code m="5px" colorScheme="pink" children="JAVA" />
                                                <Code m="5px" colorScheme="orange" children="SpringBoot" />
                                                <Code m="5px" colorScheme="purple" children="AWS S3" />
                                        </Box>
                                    </VStack>
                                </Box>
                            </VStack>
                            </AccordionPanel>
                </AccordionItem>
                </>
                        ) : (
                            <>
                            <AccordionItem mb={4} border="none" >
                    <AccordionButton  _hover={{}} backgroundColor="#740cdc" borderRadius="10px">
                        <Box><Text> Software Engineer Intern @ OYO Rooms </Text></Box>
                        <Spacer />  
                        <Box><Text>2020 - 2020</Text></Box>
                        <Box><Icon as={AccordionIcon} /></Box>
                    </AccordionButton>
                    <AccordionPanel mt="20px" p={4} backgroundColor="#241d41" borderRadius="10px">
                            <HStack>
                                <Box w="82%" textAlign="justify" justifyContent="center">
                                    <VStack>
                                        <Box w="100%">
                                            <HStack direction='row' w="100%">
                                            <FontAwesomeIcon icon={faLocationDot} style={{color: "#9827a5",}} />
                                                <Text>Gurgaon, India</Text>
                                                <div/>
                                                <Link href="https://www.oyorooms.com/"><FontAwesomeIcon icon={faSquareArrowUpRight} style={{color: "#d121c9",}} /> oyorooms.com</Link>
                                            </HStack>
                                        </Box>
                                        <Spacer />
                                        <Box>
                                            I worked on Invoice and Finance Dev team and my role included developing APIs for internal usage, 
                                            automating manual task of feeding invoice data into system 
                                            and create new templates for invoices as the company expanded to new regions.
                                        </Box>
                                        <Spacer />
                                        <Box w="100%">
                                            <HStack direction='row'>
                                                <Code colorScheme="blue" children="Ruby" />
                                                <Code colorScheme="red" children="Rails" />
                                                <Code colorScheme="teal" children="PostgreSQL" />
                                                <Code colorScheme="pink" children="JAVA" />
                                                <Code colorScheme="orange" children="SpringBoot" />
                                                <Code colorScheme="purple" children="AWS S3" />
                                            </HStack>
                                        </Box>
                                    </VStack>
                                </Box>
                                <Box w="18%">   
                                    <Image src={OYOLogo} alt="Amdocs Logo" />
                                </Box>
                            </HStack>
                            </AccordionPanel>
                </AccordionItem>
                </>
                        )}


            </Accordion>
        </Flex>
        
    );
};