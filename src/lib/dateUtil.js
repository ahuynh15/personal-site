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

// Sort date in reverse order
export const reverseSortDate = (a, b) => {
  // Compare month if years are equal
  if (a.startDate.year === b.startDate.year) {
    if (a.startDate.month < b.startDate.month) {
      return 1;
    }
    if (a.startDate.month > b.startDate.month) {
      return -1;
    }
    return 0;
  }

  // Compare years
  if (a.startDate.year < b.startDate.year) {
    return 1;
  }
  if (a.startDate.year > b.startDate.year) {
    return -1;
  }
  return 0;
};
