import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

/**
 * Page navigation listens to mouse wheel events.
 * Use this wrapper component to allow make
 * inner scrolling compatible based on the following
 * logic...
 *
 * If the content is scrollable:
 * - Prevent the mouse wheel event from propogating if the content is scrollable
 * - However, allow the event to propogate if at the top or bottom of the scroll window
 */

function ScrollableWrapper({ children }) {
  const ref = useRef(null);
  const [isScrollable, setIsScollable] = useState(false);

  const setRef = useCallback((node) => {
    if (node) {
      // The element is scrollable if the scrollHeight > clientHeight
      setIsScollable(node.scrollHeight > node.clientHeight);
    }

    ref.current = node;
  }, []);

  const onResize = useMemo(
    () =>
      debounce(() => {
        // Determine if the ref is scrollable
        setIsScollable(ref.current.scrollHeight > ref.current.clientHeight);
      }, 100),
    [],
  );

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  const onWheel = (e) => {
    // Determine the current position
    const isTop = ref.current.scrollTop === 0;
    const isBottom =
      ref.current.scrollTop ===
      ref.current.scrollHeight - ref.current.offsetHeight;

    // In a scrollable inner element...
    if (isScrollable) {
      // Allow the emission of the wheel event if scrolling up at the top
      if (isTop && e.deltaY < 0) {
        return;
      }

      // Allow the emission of the wheel event if scrolling down at the bottom
      if (isBottom && e.deltaY > 0) {
        return;
      }

      // Otherwise, stop the propagation of the event
      e.stopPropagation();
    }
  };

  return (
    <div
      ref={setRef}
      className="scrollbar scrollbar-light dark:scrollbar-dark flex h-full overflow-y-auto"
      onWheel={onWheel}
    >
      {children}
    </div>
  );
}

ScrollableWrapper.propTypes = { children: PropTypes.node };

ScrollableWrapper.defaultProps = { children: undefined };

export default ScrollableWrapper;
