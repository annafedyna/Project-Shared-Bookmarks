export function calculatedaysAgo(postDate) {
  const postTime = new Date(postDate);
  const today = new Date();
  const difference = today - postTime;
  const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
  if (daysDifference === 0) {
    return "Today";
  }
  return daysDifference === 1 ? `1 day ago` : `${daysDifference} day(s) ago`;
}
