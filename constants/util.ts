export const getFormattedDate = (date: Date) => {
  return `${date.toLocaleString("default", {
    month: "short",
  })} ${date.getDate()}`;
};
