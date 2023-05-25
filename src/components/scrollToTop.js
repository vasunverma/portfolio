import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { IconButton } from '@chakra-ui/react';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <IconButton
      icon={<FaArrowUp />}
      size="lg"
      colorScheme="teal"
      aria-label="Scroll to top"
      position="fixed"
      bottom="4"
      right="4"
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? 'scale(1)' : 'scale(0)'}
      transition="opacity 0.3s ease, transform 0.3s ease"
      onClick={scrollToTop}
    />
  );
};
