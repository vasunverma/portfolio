import { Flex, Wrap, Heading, VStack} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import "../stylesheets/skills.css";

export const Skills = () => {
    // const [isMobile, setIsMobile] = useState(false);

    // Toggle isMobile based on window width
    // const handleResize = () => {
    //   setIsMobile(window.innerWidth <= 768);
    // };
  
    // useEffect(() => {
    //   window.addEventListener("resize", handleResize);
    //   handleResize();
    // }, []);

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
                <VStack mb="30px">
                    <Heading size="md" mb="20px" display="flex" justifyContent="center">Machine Learning</Heading>
                    <Wrap spacing="20px" justify="center" w="400px">
                        <span className="developmentTags">Python</span>
                        <span className="developmentTags">R</span>
                        <span className="developmentTags">SQL</span>
                        <span className="developmentTags">TensorFlow</span>
                        <span className="developmentTags">Keras</span>
                        <span className="developmentTags">OpenCV</span>
                        <span className="developmentTags">Big Data</span>
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
            </Flex>
    );
}