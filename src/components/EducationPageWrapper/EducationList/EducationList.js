import React from 'react';
import { useSelector } from 'react-redux';
import { Education } from '../Education';

const EducationList = () => {
  const education = useSelector((state) => state.education.data);

  return (
    <>
      <div className="flex flex-col gap-4">
        {education.map((item, index) => {
          return (
            <Education
              key={index}
              title={item.title}
              location={item.location}
              startDate={item.startDate}
              endDate={item.endDate}
              description={item.description}
              additionalHeaders={item.additionalHeaders}
              credential={item.credential}
            />
          );
        })}
      </div>
    </>
  );
};

EducationList.propTypes = {};

export default EducationList;
