export const generateTimeStamps = () => {
  const timestamps = [];

  for (let i = 0; i <= 24; i++) {
    const timestamp = `${i < 10 ? "0" : ""}${i}:00`; // Format hours with leading zero if necessary
    timestamps.push({ value: timestamp });
  }

  return timestamps;
};
