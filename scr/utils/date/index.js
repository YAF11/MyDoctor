export const getChatTime = date => {
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${hour}:${minutes} ${hour >= 12 ? 'PM' : 'AM'}`;
};

export const setDateChat = oldDate => {
  const month = oldDate.getMonth() + 1;
  const year = oldDate.getFullYear();
  const date = oldDate.getDate();

  return `${year}-${month}-${date}`;
};
