import React, { useState } from "react";
import { VStack, Card, CardBody, Stack, Image, Heading, Text, Link, Box, Code } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import "../stylesheets/projects.css";


const ProjectCard = ({ project, isMobile }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  const renderTextContent = (text, maxLength) => {
    if (showFullText) {
      return text;
    } else {
      return truncateText(text, maxLength);
    }
  };

  const showRead = (text) => {
    if (text.length > 150) {
      return true;
    }
    return false;
  }

  return (
    <Card borderWidth="2px" borderColor="#d121c9" backgroundColor="#">
    <CardBody>
      {isMobile ? (
        <VStack>
          <Image w="300px" h="200px" mb="20px" src={project.image} alt={project.title} borderRadius="lg" />
          <Stack mt="6" spacing="3" color="#f0e7db">
            <Heading size="md">
              {project.title}
              <Link href={project.demoLink} target="_blank" rel="noreferrer" style={{ marginLeft: "10px" }}>
                <FontAwesomeIcon icon={faSquareArrowUpRight} style={{ color: "#d121c9" }} />
              </Link>
              <Link href={project.githubLink} target="_blank" rel="noreferrer" style={{ marginLeft: "10px" }}>
                <FontAwesomeIcon icon={faGithub} style={{ color: "#d121c9" }} />
              </Link>
            </Heading>
            <Text>
              {renderTextContent(project.description, 100)}
            </Text>
            <Link onClick={toggleShowFullText} cursor="pointer" color="#d121c9">
                {showRead(project.description) ? (showFullText ? "Read less" : "Read more") : null}
            </Link>
            <Box>
                {project.tags.map((tag, index) => (
                <Code key={tag} className="projectDevelopmentTags" colorScheme={project.tagColor[index]} children={tag} />
              ))}
            </Box>
          </Stack>
        </VStack>
      ) : (
        <Stack direction="row" align="flex-start">
          <Image w="300px" h="220px" mr="20px" src={project.image} alt={project.title} borderRadius="lg" />
          <Stack mt="6" spacing="3" color="#f0e7db">
            <Heading size="md">
              {project.title}
              {project.demoLink ? 
              <Link href={project.demoLink} target="_blank" rel="noreferrer" style={{ marginLeft: "10px" }}>
                <FontAwesomeIcon icon={faSquareArrowUpRight} style={{ color: "#d121c9" }} />
              </Link>
                : null}
              <Link href={project.githubLink} target="_blank" rel="noreferrer" style={{ marginLeft: "10px" }}>
                <FontAwesomeIcon icon={faGithub} style={{ color: "#d121c9" }} />
              </Link>
            </Heading>
            <Text>
              {renderTextContent(project.description, 150)}
            </Text>
            <Link onClick={toggleShowFullText} cursor="pointer" color="#d121c9">
              {showRead(project.description) ? (showFullText ? "Read less" : "Read more") : null}
            </Link>
            <Box>
              {project.tags.map((tag, index) => (
                <Code key={tag} className="projectDevelopmentTags" colorScheme={project.tagColor[index]} children={tag} />
              ))}
            </Box>
          </Stack>
        </Stack>
      )}
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
