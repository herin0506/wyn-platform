export const getCurrentYear = (): number => {
  const currentDate = new Date();
  return currentDate.getFullYear();
};
