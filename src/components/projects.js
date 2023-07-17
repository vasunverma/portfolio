import React, { useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
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
    <Flex
      p="10px"
      alignItems="left"
      justifyContent="center"
      margin="auto"
      direction="column"
      id="projects"
      maxWidth="800px"
    >
      <Heading p="20px 20px 20px 0px" justifyContent="center" display="flex">
        Things I've Built
      </Heading>

      <Grid
        templateRows='repeat(1, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gap="20px"
      >
        {projectData.map((project) => (
          <GridItem rowSpan={isMobile ? 1 : project.rowSpan} colSpan={isMobile ? 2 : project.columnSpan} key={project.id}>
            <ProjectCard project={project} isMobile={isMobile} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};
