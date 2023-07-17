import { Flex, Text, Box, Heading} from "@chakra-ui/react";


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
                    You can learn more about me by checking out my <a style={{color: "#009688"}} href="https://www.linkedin.com/in/vasunverma/" target="_blank" rel="noreferrer">
                    LinkedIn</a> page, 
                    exploring my <a style={{color: "#009688"}} href="https://github.com/vasunverma" target="_blank" rel="noreferrer">
                    Github</a>,
                    or reviewing my <a style={{color: "#009688"}} href="https://vasunverma.github.io/Vasu_Verma_Resume.pdf" target="_blank" rel="noreferrer">
                    Resume</a>.
                    </Text>               
                </Box>
            </Flex>
    );
}