function timeConvertion(updatedAt) {
  const currentDate = Date.now();
  const updatedDate = updatedAt;

  const secondAgo = Math.floor((currentDate - updatedDate) / 1000);
  if (secondAgo < 60) {
    return `${secondAgo} second ago`;
  }
  const minuteAgo = Math.floor(secondAgo / 60);
  if (minuteAgo < 60) {
    return `${minuteAgo} minute ago`;
  }
  const hourAgo = Math.floor(secondAgo / 3600);
  if (hourAgo < 24) {
    return `${hourAgo} hour ago`;
  }
  const dayAgo = Math.floor(secondAgo / 86400);
  return `${dayAgo} day ago`;
}

export { timeConvertion };
