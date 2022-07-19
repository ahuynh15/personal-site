// Calculate the time between two dates in years and months
export const getTimespan = (startDate, endDate) => {
  const years = endDate.year - startDate.year;
  const months = endDate.month - startDate.month;
  let timespan = '';

  if (years > 0) {
    timespan += `${years} ${years > 1 ? 'years' : 'year'}`;
  }

  if (months > 0) {
    timespan += `${years > 0 ? ' ' : ''}${months} ${
      months > 1 ? 'months' : 'month'
    }`;
  }

  return timespan;
};

const dateHelper = { getTimespan };

export default dateHelper;
