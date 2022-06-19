import { useSelector } from 'react-redux';
import { Education } from '../Education';

const EducationList = () => {
  const education = useSelector((state) => state.education.data);

  return (
    <>
      {education.map((item, index) => {
        return (
          <div className="mb-8" key={index}>
            <Education
              title={item.title}
              location={item.location}
              startDate={item.startDate}
              endDate={item.endDate}
              description={item.description}
              additionalHeaders={item.additionalHeaders}
              credential={item.credential}
            />
          </div>
        );
      })}
    </>
  );
};

EducationList.propTypes = {};

export default EducationList;
