import { Flex, Text, Box, HStack, VStack, Link, Code, Image, Stack, Heading, Card, CardBody, SimpleGrid } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import AudioBidImage from "../assets/AudioBidProject.png";
import { useEffect, useState } from "react";
import BinaryClassificationImage from "../assets/BinaryClassificationProject.png";
import SmartAirPurifierImage from "../assets/SmartAirPurifierProject.jpg";

export const Projects = () => {

  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <Flex p="10px" alignItems="left" justifyContent="center" margin="auto" direction="column" id="projects" maxWidth="800px">
      {/* <Divider p="10px" /> */}
      <Heading p="20px 20px 20px 0px" justifyContent="center" display="flex">Things I’ve Built</Heading>
      
      <SimpleGrid columns={{ base: 1, md: 1 }} spacing="20px">
        <Card size="md" backgroundColor="#312b46">
          <CardBody>
          {isMobile ?
            (
              <VStack>
              <Image w="300px" h="200px" mb="20px" src={AudioBidImage} alt="AudioBid Portal" borderRadius="lg" />
              <Stack mt="6" spacing="3" color="#f0e7db">
                  <Heading size="md">
                    Audio Bid
                    <Link _hover={{}} href="https://www.amdocs.com" pl="10px"><FontAwesomeIcon icon={faSquareArrowUpRight} style={{color: "#d121c9",}} /></Link>
                    <Link _hover={{}} href="https://www.amdocs.com" pl="10px"><FontAwesomeIcon icon={faGithub} style={{color: "#d121c9",}} /></Link>
                  </Heading>
                  
                  <Text>
                    AudioBid is a Django-based voice transcription job portal with dynamic pricing and Google OAuth integration. 
                    It offers multiple audio upload options and utilizes AWS S3 for storage and streaming. 
                    The platform enables users to claim and get paid for jobs, along with a chat system for seamless communication.
                  </Text>
                  <Box>
                  <Code margin="10px" colorScheme="teal" children="Python" />
                  <Code margin="10px" colorScheme="blue" children="Django" />
                  <Code margin="10px" colorScheme="red" children="JavaScript" />
                  <Code margin="10px" colorScheme="yellow" children="S3" />
                  <Code margin="10px" colorScheme="red" children="PostgreSQL" />
                  <Code margin="10px" colorScheme="purple" children="SES" />
                  <Code margin="10px" colorScheme="orange" children="OAuth" />
                  <Code margin="10px" colorScheme="pink" children="HTML/CSS" />
                  <Code margin="10px" colorScheme="green" children="Heroku" />
                  </Box>
              </Stack>
            </VStack>
            ):(
              <HStack>
              <Image w="300px" h="200px" mr="20px" src={AudioBidImage} alt="AudioBid Portal" borderRadius="lg" />
              <Stack mt="6" spacing="3" color="#f0e7db">
                  <Heading size="md">
                    Audio Bid
                    <Link _hover={{}} href="https://www.amdocs.com" pl="10px"><FontAwesomeIcon icon={faSquareArrowUpRight} style={{color: "#d121c9",}} /></Link>
                    <Link _hover={{}} href="https://www.amdocs.com" pl="10px"><FontAwesomeIcon icon={faGithub} style={{color: "#d121c9",}} /></Link>
                  </Heading>
                  
                  <Text>
                    AudioBid is a Django-based voice transcription job portal with dynamic pricing and Google OAuth integration. 
                    It offers multiple audio upload options and utilizes AWS S3 for storage and streaming. 
                    The platform enables users to claim and get paid for jobs, along with a chat system for seamless communication.
                  </Text>
                  <Box>
                  <Code margin="10px" colorScheme="teal" children="Python" />
                  <Code margin="10px" colorScheme="blue" children="Django" />
                  <Code margin="10px" colorScheme="red" children="JavaScript" />
                  <Code margin="10px" colorScheme="yellow" children="S3" />
                  <Code margin="10px" colorScheme="red" children="PostgreSQL" />
                  <Code margin="10px" colorScheme="purple" children="SES" />
                  <Code margin="10px" colorScheme="orange" children="OAuth" />
                  <Code margin="10px" colorScheme="pink" children="HTML/CSS" />
                  <Code margin="10px" colorScheme="green" children="Heroku" />
                  </Box>
              </Stack>
            </HStack>
            )
          }
          </CardBody>
        </Card>
        <Card size="md" backgroundColor="#312b46">
          <CardBody>
          {isMobile ?
            (
              <VStack>
                <Image w="300px" h="200px" mb="20px" src={BinaryClassificationImage} alt="Binary Classification Project" borderRadius="lg"/>
                <Stack mt="6" spacing="3" color="#f0e7db">
                  <Heading size="md">
                    Binary Classification with High-Dimensional Data
                    <Link _hover={{}} href="https://www.amdocs.com" pl="10px"><FontAwesomeIcon icon={faGithub} style={{color: "#d121c9",}} /></Link>
                  </Heading>
                  <Text>
                    ML models were developed using R, Caret, Baruta, XgBoost, Tensorflow, Keras, and RandomForest for binary classification with high-dimensional data. 
                    Predictor reduction techniques were applied, achieving 20 predictors while maintaining high predictive power. 
                    Rigorous cross-validation techniques led to 82% accuracy on the validation set, accompanied by insightful visualizations and statistical summaries.
                  </Text>
                  <Box>
                    <Code margin="10px" colorScheme="teal" children="R" />
                    <Code margin="10px" colorScheme="blue" children="XgBoost" />
                    <Code margin="10px" colorScheme="red" children="Baruta" />
                    <Code margin="10px" colorScheme="yellow" children="Tensorflow" />
                    <Code margin="10px" colorScheme="purple" children="PCA" />
                    <Code margin="10px" colorScheme="orange" children="Keras" />
                    <Code margin="10px" colorScheme="pink" children="RandomForest" />
                    <Code margin="10px" colorScheme="green" children="Caret" />
                  </Box>
                </Stack>
              </VStack>
            ):(
              <HStack>
              <Image w="300px" h="200px" mr="20px" src={BinaryClassificationImage} alt="Binary Classification Project" borderRadius="lg"/>
              <Stack mt="6" spacing="3" color="#f0e7db">
                <Heading size="md">
                  Binary Classification with High-Dimensional Data
                  <Link _hover={{}} href="https://www.amdocs.com" pl="10px"><FontAwesomeIcon icon={faGithub} style={{color: "#d121c9",}} /></Link>
                </Heading>
                <Text>
                  ML models were developed using R, Caret, Baruta, XgBoost, Tensorflow, Keras, and RandomForest for binary classification with high-dimensional data. 
                  Predictor reduction techniques were applied, achieving 20 predictors while maintaining high predictive power. 
                  Rigorous cross-validation techniques led to 82% accuracy on the validation set, accompanied by insightful visualizations and statistical summaries.
                </Text>
                <Box>
                  <Code margin="10px" colorScheme="teal" children="R" />
                  <Code margin="10px" colorScheme="blue" children="XgBoost" />
                  <Code margin="10px" colorScheme="red" children="Baruta" />
                  <Code margin="10px" colorScheme="yellow" children="Tensorflow" />
                  <Code margin="10px" colorScheme="purple" children="PCA" />
                  <Code margin="10px" colorScheme="orange" children="Keras" />
                  <Code margin="10px" colorScheme="pink" children="RandomForest" />
                  <Code margin="10px" colorScheme="green" children="Caret" />
                </Box>
              </Stack>
            </HStack>
            )
            }
          </CardBody>
        </Card>
        <Card size="md" backgroundColor="#312b46">
          <CardBody>
          {isMobile ?
            (
              <VStack>
                <Image w="300px" h="200px" mb="20px" src={SmartAirPurifierImage} alt="Green double couch with wooden legs" borderRadius="lg" />
                <Stack mt="6" spacing="3" color="#f0e7db">
                  <Heading size="md">
                    Smart Air Purifier
                    <Link _hover={{}} href="https://www.amdocs.com" pl="10px"><FontAwesomeIcon icon={faGithub} style={{color: "#d121c9",}} /></Link>
                  </Heading>
                  <Text>
                    A budget-friendly smart air purifier was designed and developed using C++, Arduino, AWS IoT, HTML/CSS, JavaScript, and P5.js. 
                    The purifier integrated dust, temperature, and humidity sensors to provide real-time air quality feedback. 
                    It featured an automatic switch-on function triggered by high dust density and utilized MQTT protocol for real-time communication with the web app. 
                    The purifier effectively cleaned indoor air using HEPA H13 and activated carbon filters. 
                  </Text>
                  <Box>
                    <Code margin="10px" colorScheme="teal" children="C++" />
                    <Code margin="10px" colorScheme="blue" children="Arduino" />
                    <Code margin="10px" colorScheme="red" children="AWS IoT" />
                    <Code margin="10px" colorScheme="yellow" children="JavaScript" />
                    <Code margin="10px" colorScheme="purple" children="HTML/CSS" />
                    <Code margin="10px" colorScheme="orange" children="P5.js" />
                    <Code margin="10px" colorScheme="pink" children="MQTT" />
                  </Box>
                </Stack>
              </VStack>
            ):(
              <HStack>
                <Image w="300px" h="200px" mr="20px" src={SmartAirPurifierImage} alt="Green double couch with wooden legs" borderRadius="lg" />
                <Stack mt="6" spacing="3" color="#f0e7db">
                  <Heading size="md">
                    Smart Air Purifier
                    <Link _hover={{}} href="https://www.amdocs.com" pl="10px"><FontAwesomeIcon icon={faGithub} style={{color: "#d121c9",}} /></Link>
                  </Heading>
                  <Text>
                    A budget-friendly smart air purifier was designed and developed using C++, Arduino, AWS IoT, HTML/CSS, JavaScript, and P5.js. 
                    The purifier integrated dust, temperature, and humidity sensors to provide real-time air quality feedback. 
                    It featured an automatic switch-on function triggered by high dust density and utilized MQTT protocol for real-time communication with the web app. 
                    The purifier effectively cleaned indoor air using HEPA H13 and activated carbon filters. 
                  </Text>
                  <Box>
                    <Code margin="10px" colorScheme="teal" children="C++" />
                    <Code margin="10px" colorScheme="blue" children="Arduino" />
                    <Code margin="10px" colorScheme="red" children="AWS IoT" />
                    <Code margin="10px" colorScheme="yellow" children="JavaScript" />
                    <Code margin="10px" colorScheme="purple" children="HTML/CSS" />
                    <Code margin="10px" colorScheme="orange" children="P5.js" />
                    <Code margin="10px" colorScheme="pink" children="MQTT" />
                  </Box>
                </Stack>
              </HStack>
              )
          } 
          </CardBody>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}
