import React, { useEffect, useState } from "react";
import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./projectCard";
import projectData from "./projectData";

export const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Flex p="10px" alignItems="left" justifyContent="center" margin="auto" direction="column" id="projects" maxWidth="800px">
      <Heading p="20px 20px 20px 0px" justifyContent="center" display="flex">
        Things I've Built
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 1 }} spacing="20px">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} isMobile={isMobile} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};