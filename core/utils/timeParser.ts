export const timeParser = (timeInSeconds?: number) => {
  if (!timeInSeconds) {
    return '00:00';
  }

  const minutes = Math.round(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  return `${minutes}:${seconds}`;
};
