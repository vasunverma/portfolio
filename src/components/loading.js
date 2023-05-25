import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import '../stylesheets/loading.css';

export const LoadingScreen = () => {
  return (
    <Flex align="center" justify="center" height="100vh" className='loader'>
      <Box position="relative">
        <div className="custom-spinner" />
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          fontWeight="bold"
          fontSize="xl"
          color="#f0e7db">
          Coding...
        </Text>
      </Box>
    </Flex>
  );
};