export const getDate = value => {
  if (value !== undefined && value !== null) {
    const date =
      value.getDate() +
      '-' +
      parseInt(value.getMonth() + 1) +
      '-' +
      value.getFullYear();
    return date;
  }
};
