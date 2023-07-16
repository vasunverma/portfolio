import { Flex, Text, Box, Link, Heading} from "@chakra-ui/react";


export const About = () => {

    return(
            <Flex p="10px" alignItems="left" 
            justifyContent="center" margin="auto" 
            direction="column" id="about" maxWidth="800px">
                <Box>
                    <Heading p="20px 20px 20px 0px" justifyContent="center" display="flex">About Me</Heading>
                    <Text textAlign="justify" justifyContent="center">
                        I am an extremely enthusiastic, detail-oriented and 
                        smart-working engineer who is always on the lookout 
                        for opportunities that motivate and challenge me everyday.
                    </Text>
                    <br />
                    <Text textAlign="justify" justifyContent="center">
                    I have experience working with a variety of technologies, handling both backend and frontend development. 
                    Currently, I am actively engaged in prepartion for AWS Certified Solutions Architect Associate exam. 
                    My primary objective is to develop high-performing applications that effectively address real-world challenges and deliver an exceptional user experience.
                    </Text>
                    <br />
                    <Text textAlign="justify" justifyContent="center">
                    You can learn more about me by checking out my <Link _hover={{}} color='teal.500' href='https://www.linkedin.com/in/vasunverma/'>LinkedIn</Link> page, 
                    exploring my <Link _hover={{}} color='teal.500' href='https://github.com/VasuNVerma/'>GitHub</Link>,
                    or reviewing my <Link _hover={{}} color='teal.500' href='https://vasunverma.github.io/Vasu_Verma_Resume.pdf'>Resume</Link>.
                    </Text>               
                </Box>
            </Flex>


       
    );
}