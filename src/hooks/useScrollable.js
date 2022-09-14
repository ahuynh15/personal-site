import { useCallback, useState, useEffect, useMemo, useRef } from 'react';
import debounce from 'lodash.debounce';

// Need to detect when at the top or bottom of scroll window

const useScrollable = () => {
  const ref = useRef(null);

  // Track whether the given ref is scrollable or not
  const [isScrollable, setIsScollable] = useState(false);
  const [isTop, setIsTop] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  const setRef = useCallback((node) => {
    if (node) {
      // The element is scrollable if the scrollHeight > clientHeight
      setIsScollable(node.scrollHeight > node.clientHeight);
    }

    ref.current = node;
  });

  const onResize = useMemo(
    () =>
      debounce(() => {
        console.log(ref.current);

        // Determine if the ref is scrollable
        setIsScollable(ref.current.scrollHeight > ref.current.clientHeight);
      }, 100),
    [],
  );

  const onScroll = () => {
    console.log('on scroll');

    // Determine if the ref can be scrolled upwards
    setIsTop(ref.current.scrollTop === 0);

    // Determine if the ref can be scrolled downwards
    setIsBottom(
      ref.current.scrollTop ===
        ref.current.scrollHeight - ref.current.offsetHeight,
    );
  };

  // Listen to resize event and update the scrollable state as needed
  useEffect(() => {
    console.log(ref);

    window.addEventListener('resize', onResize);
    ref.current.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('resize', onResize);
      ref.current.removeEventListener('scroll', onScroll);
    };
  }, [ref]);

  return [setRef, { isScrollable, isTop, isBottom }];
};

export default useScrollable;
