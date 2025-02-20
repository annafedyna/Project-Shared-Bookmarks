export function calculatedaysAgo(postDate) {
  const postTime = new Date(postDate);
  const today = new Date();

  const postDay = postTime.toDateString();
  const todayDay = today.toDateString();

  if (postDay === todayDay) {
    return "Today";
  }
  const timeDiff = today.setHours(0, 0, 0, 0) - postTime.setHours(0, 0, 0, 0);
  const daysDifference = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  return daysDifference === 1 ? `1 day ago` : `${daysDifference} day(s) ago`;
}
