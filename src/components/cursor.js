import React, { useEffect } from 'react';

export const Cursor = () => {
  useEffect(() => {
    let cursorX = 0;
    let cursorY = 0;
    const cursor = document.querySelector('.cursor');

    const updateCursor = () => {
      cursor.setAttribute(
        'style',
        `top: ${cursorY - 35}px; left: ${cursorX - 15}px;`
      );
    };

    const handleMouseMove = (e) => {
      cursorX = e.pageX;
      cursorY = e.pageY;
      requestAnimationFrame(updateCursor);
    };
    
    // const updateCursorOnScroll = () => {
    //     cursor.setAttribute(
    //       'style',
    //       `top: ${cursorY - 35 + window.scrollY}px; left: ${cursorX - 15 + window.scrollX}px;`
    //     );
    //   };  

    // const handleScroll = (e) => {
    //     console.log(e);
    //     console.log(window.scrollY);
    //     requestAnimationFrame(updateCursorOnScroll)
    //   };

    document.addEventListener('mousemove', handleMouseMove);
    // document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    //   document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="cursor"></div>;
};
