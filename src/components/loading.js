import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import '../stylesheets/loading.css';

export const LoadingScreen = () => {
  return (
    <div id="loader-wrapper">
      <div id="loader"></div>
      <Flex
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        align="center"
        justify="center"
        width="100%"
        height="100%"
        zIndex="2000"
      >
        <Text fontSize="xl" fontWeight="bold" color="white">
          Loading...
        </Text>
      </Flex>
    </div>
  );
};
