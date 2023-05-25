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
                        I've worked using different technologies, both backend and frontend. I'm currently working using Django and Python. 
                        My goal is to build highly performant applications that solve real-world problems and provide users with an awesome 
                        experience.
                    </Text>
                    <br />
                    <Text textAlign="justify" justifyContent="center">
                        You can read more about me on my <Link _hover={{}} color='teal.500' href='https://www.linkedin.com/in/vasunverma/'>LinkedIn</Link> page, 
                        or Check my <Link _hover={{}} color='teal.500' href='https://github.com/VasuNVerma/'>Github</Link> for some cool things. 
                    </Text>
                        
                </Box>
            </Flex>


       
    );
}