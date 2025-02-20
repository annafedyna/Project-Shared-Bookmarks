export function reversedChronologicalOrder(data) {
  return data.sort((a, b) => new Date(b.date) - new Date(a.date));
}
