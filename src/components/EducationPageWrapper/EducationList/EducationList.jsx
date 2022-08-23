import React from 'react';
import { useSelector } from 'react-redux';
import Education from '../Education';

function EducationList() {
  const education = useSelector((state) => state.education.data);

  return (
    <div className="flex flex-col gap-4 px-4 pb-24 sm:pb-4 sm:pt-4">
      {education.map((item) => (
        <Education
          key={item.title}
          title={item.title}
          location={item.location}
          startDate={item.startDate}
          endDate={item.endDate}
          description={item.description}
          additionalHeaders={item.additionalHeaders}
          credential={item.credential}
        />
      ))}
    </div>
  );
}

EducationList.propTypes = {};

EducationList.defaultProps = {};

export default EducationList;
