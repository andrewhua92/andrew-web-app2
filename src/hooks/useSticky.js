/* eslint-disable prefer-reflect */
// I copied this from https://www.ibrahima-ndaw.com/blog/build-a-sticky-nav-with-react/

import { useEffect, useState, useRef } from 'react';

function useSticky() {
  const [isSticky, setSticky] = useState(false);
  const element = useRef(null);

  const handleScroll = () => {
    // eslint-disable-next-line no-unused-expressions
    window.scrollY > element.current.getBoundingClientRect().top
      ? setSticky(true)
      : setSticky(false);
  };

  // This function handles the scroll performance issue
  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut;
    return () => {
      // eslint-disable-next-line consistent-this
      let context = this;
      let args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll));
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [debounce, handleScroll]);

  return { isSticky, element };
}

export default useSticky;
