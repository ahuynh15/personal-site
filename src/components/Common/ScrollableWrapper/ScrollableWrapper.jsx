import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function ScrollableWrapper({ children, className }) {
  const [isScrollable, setIsScollable] = useState(false);

  const ref = useCallback((node) => {
    if (node !== null) {
      // The element is scrollable if the scrollHeight > clientHeight
      setIsScollable(node.scrollHeight > node.clientHeight);
    }
  });

  return (
    <div
      ref={ref}
      className={classNames('flex h-full overflow-y-auto', className)}
    >
      {children}
    </div>
  );
}

ScrollableWrapper.propTypes = {};

ScrollableWrapper.defaultProps = {};

export default ScrollableWrapper;
