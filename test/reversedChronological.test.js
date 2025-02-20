import { reversedChronologicalOrder } from "../utils/reversedChronologicalOrder.js"; 

describe("reversedChronologicalOrder function", () => {
  test("should sort objects in descending order based on date", () => {
    const data = [
      { id: 1, date: "2024-02-10T10:00:00Z" },
      { id: 2, date: "2024-02-12T10:00:00Z" },
      { id: 3, date: "2024-02-11T10:00:00Z" },
    ];

    const sortedData = reversedChronologicalOrder(data);

    expect(sortedData).toEqual([
      { id: 2, date: "2024-02-12T10:00:00Z" },
      { id: 3, date: "2024-02-11T10:00:00Z" },
      { id: 1, date: "2024-02-10T10:00:00Z" },
    ]);
  });

  test("should handle an array with one item", () => {
    const data = [{ id: 1, date: "2024-02-10T10:00:00Z" }];
    expect(reversedChronologicalOrder(data)).toEqual([
      { id: 1, date: "2024-02-10T10:00:00Z" },
    ]);
  });

  test("should return an empty array if given an empty array", () => {
    expect(reversedChronologicalOrder([])).toEqual([]);
  });
});
