export const chartMaxDate = () => {
  const now = new Date();
  now.setHours(now.getHours() - 4);
  return now;
};
