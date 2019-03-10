let attempt = 1;

export const increaseAttempts = () => {
  attempt++;
};

export const getAttemptsCount = () => {
  return attempt;
};
