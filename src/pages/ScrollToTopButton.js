import React, { useState, useEffect } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';

const ScrollToTopButton = () => {
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

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='fixed bottom-2 right-2'>
      <button 
        type='button'
        onClick={scrollToTop} 
        className={isVisible ? 'opacity-100 inline-flex items-center p-3 rounded-full shadow-sm text-white bg-pink-400 transition-opacity hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 ' : 'opacity-0'}>
        <BiArrowFromBottom className='h-12 w-12 hover:scale-125' aria-hidden='true' />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
