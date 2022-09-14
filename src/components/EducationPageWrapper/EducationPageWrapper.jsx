import React from 'react';
import { Title } from '@/Common';
import EducationList from './EducationList';
import useScrollable from '@/hooks/useScrollable';

function EducationPageWrapper() {
  const [ref, { isScrollable, isTop, isBottom }] = useScrollable();

  // TODO:
  // - Need to disable mouse wheel event detection on mobile screens
  // - There is some null error when cleaning up the event listeners

  return (
    <div className="flex h-full flex-col lg:flex-row">
      <div className="my-4 ml-8 mr-12 mb-4 self-center sm:mr-8 lg:w-1/3">
        <Title text="I have completed..." />
      </div>
      <div
        ref={ref}
        className="flex h-full overflow-y-auto sm:mt-4 lg:mt-0 lg:w-2/3"
        onWheel={(e) => {
          /**
           * If the content is scrollable...
           * - Prevent the mouse wheel event from propogating if the content is scrollable
           * - However, allow the event to propogate if at the top or bottom of the scroll window
           */
          if (isScrollable && !isTop && !isBottom) {
            e.stopPropagation();
          }
        }}
        onScroll={(e) => {}}
      >
        <div className="w-full lg:my-auto">
          <div>isScrollable: {isScrollable ? 'yes' : 'no'}</div>
          <div>isTop: {isTop ? 'yes' : 'no'}</div>
          <EducationList />
          <div>isBottom: {isBottom ? 'yes' : 'no'}</div>
        </div>
      </div>
    </div>
  );
}

export default EducationPageWrapper;
