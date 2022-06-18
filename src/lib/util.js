// Calculate the time between two dates in years and months
export const getTimespan = (startDate, endDate) => {
  let years = endDate.year - startDate.year;
  let months = endDate.month - startDate.month;
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
