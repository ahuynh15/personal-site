import React, { useEffect, useState } from 'react';
import { nextPage, prevPage, selectIsTransitioning } from '@/slices/PageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { motion, useAnimation } from 'framer-motion';
import pagesConfig from '@/constants/pagesConfig';

function PageScroller({ currentPageNumber }) {
  const dispatch = useDispatch();
  const isTransitioning = useSelector((state) => selectIsTransitioning(state));
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isIdle, setisIdle] = useState(true);
  const animationControl = useAnimation();

  const SCROLL_THRESHOLD = 100; // The amount of ticks needed in one direction to trigger a page transition
  const SCROLL_INCREMENT = 30; // The amount the progress is incremented on each mouse wheel event
  const SCROLL_DECAY = 5; // The amount of progress that decays over time
  const Y_OFFSET = 10; // The amount of offset to animate

  const isFirstPage = currentPageNumber === 1;
  const isLastPage = currentPageNumber === pagesConfig.length;

  // Set up a repeating interval to simulate progress decay
  useEffect(() => {
    const progressDecay = setInterval(() => {
      if (isIdle) {
        setScrollProgress((prevState) => {
          if (prevState > 0) {
            return Math.max(prevState - SCROLL_DECAY, 0);
          }

          if (prevState < 0) {
            return Math.min(prevState + SCROLL_DECAY, 0);
          }

          return prevState;
        });
      }
    }, 100);

    // Clear the decaying interval if progress is empty
    if (scrollProgress === 0) {
      clearInterval(progressDecay);
    }

    return () => clearInterval(progressDecay);
  }, [isIdle, scrollProgress]);

  // Manage mouse wheel event listener
  useEffect(() => {
    const onScroll = (e) => {
      let scrollTimeout;

      if (!isTransitioning) {
        clearTimeout(scrollTimeout);
        setisIdle(false);
        scrollTimeout = setTimeout(() => setisIdle(true), 1000);

        // Handle scrolling up
        if (e.deltaY < 0) {
          setScrollProgress((prevState) => {
            return isFirstPage
              ? Math.max(prevState - SCROLL_INCREMENT, 0)
              : prevState - SCROLL_INCREMENT;
          });
        }

        // Handle scrolling down
        if (e.deltaY > 0) {
          setScrollProgress((prevState) => {
            return isLastPage
              ? Math.min(prevState + SCROLL_INCREMENT, 0)
              : prevState + SCROLL_INCREMENT;
          });
        }
      }

      return 0;
    };

    // Add the mouse wheel event listener
    window.addEventListener('wheel', onScroll);

    // Clean up the mouse wheel event listener
    return () => {
      window.removeEventListener('wheel', onScroll);
    };
  }, [isTransitioning]);

  // Listen to and execute actions based on scroll progress
  useEffect(() => {
    // Move to the previous page
    if (scrollProgress < 0 && Math.abs(scrollProgress) >= SCROLL_THRESHOLD) {
      // Start mouse icon animation
      animationControl.start('scrollUp');

      // Reset scroll progress
      setScrollProgress(0);

      // Dispatch previous page action
      dispatch(prevPage());
    }

    // Move to the next page
    if (scrollProgress > 0 && Math.abs(scrollProgress) >= SCROLL_THRESHOLD) {
      // Start mouse icon animation
      animationControl.start('scrollDown');

      // Reset scroll progress
      setScrollProgress(0);

      // Dispatch previous page action
      dispatch(nextPage());
    }
  }, [scrollProgress]);

  // Reset the mouse animation when page transition is completed
  useEffect(() => {
    if (!isTransitioning) {
      animationControl.start('initial');
    }
  }, [isTransitioning]);

  // Mouse icon animation variants
  const mouseVariants = {
    initial: { scale: 1, y: 0, opacity: 1 },
    scrollUp: {
      scale: 1.1,
      y: -20,
      opacity: 0,
    },
    scrollDown: {
      scale: 1.1,
      y: 20,
      opacity: 0,
    },
  };

  const arrowVariants = {
    hidden: { scale: 0.5, opacity: 0, transition: { duration: 0 } },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="stroke-black drop-shadow-solid-2">
      <motion.svg
        width="48"
        height="88"
        viewBox="0 0 48 88"
        strokeWidth={2}
        stroke="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={1.5}
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <motion.path
          d="M33,38.639c0,-4.416 -3.585,-8 -8,-8c-4.415,-0 -8,3.584 -8,8l0,10.666c0,4.416 3.585,8 8,8c4.415,0 8,-3.584 8,-8l0,-10.666Z"
          fill="#fff"
          variants={mouseVariants}
          initial="initial"
          animate={animationControl}
        />
        <motion.path
          d="M26,36.639c0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1l-0,2.666c-0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1l0,-2.666Z"
          fill="none"
          variants={mouseVariants}
          initial="initial"
          animate={animationControl}
        />

        {/* Top Arrow */}
        {!isFirstPage && (
          <>
            <motion.path
              fill="none"
              d={`M21,${Math.min(
                20 + (Y_OFFSET * scrollProgress) / SCROLL_THRESHOLD,
                20,
              )}l4,-4l4,4`}
              variants={arrowVariants}
              initial="hidden"
              animate={isTransitioning ? 'hidden' : 'visible'}
            />
            <motion.path
              fill="none"
              d={`M25,21l-0,${Math.min(
                -4 + (Y_OFFSET * scrollProgress) / SCROLL_THRESHOLD,
                -4,
              )}`}
              variants={arrowVariants}
              initial="hidden"
              animate={isTransitioning ? 'hidden' : 'visible'}
            />
          </>
        )}

        {/* Bottom Arrow */}
        {!isLastPage && (
          <>
            <motion.path
              fill="none"
              d={`M29,${Math.max(
                68 + (Y_OFFSET * scrollProgress) / SCROLL_THRESHOLD,
                68,
              )}l-4,4l-4,-4`}
              variants={arrowVariants}
              initial="hidden"
              animate={isTransitioning ? 'hidden' : 'visible'}
            />
            <motion.path
              fill="none"
              d={`M25,67l0,${Math.max(
                4 + (Y_OFFSET * scrollProgress) / SCROLL_THRESHOLD,
                4,
              )}`}
              variants={arrowVariants}
              initial="hidden"
              animate={isTransitioning ? 'hidden' : 'visible'}
            />
          </>
        )}
      </motion.svg>
    </div>
  );
}

PageScroller.propTypes = {};

PageScroller.defaultProps = {};

export default PageScroller;
