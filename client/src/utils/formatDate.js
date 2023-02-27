import format from "date-fns/format";

export const formatDate = (date) => {
  const currentDate = date !== undefined ? new Date(date) : new Date();
  return format(currentDate, "dd/MM/yyyy");
};

export const formatDateAndTime = (date) => {
  const currentDate = date !== undefined ? new Date(date) : new Date();
  return format(currentDate, "dd/MM/yyyy HH:mm");
};
