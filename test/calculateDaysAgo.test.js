import { calculatedaysAgo } from "../utils/calculateDaysAgo.js";

test("should return 'Today' if the post was created today", () => {
  const today = new Date().toISOString();
  expect(calculatedaysAgo(today)).toEqual("Today");
});

test("should return '1 day ago' if the post was created yesterday", () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  expect(calculatedaysAgo(yesterday.toISOString())).toEqual("1 day ago");
});

test("should return '2 day(s) ago' if the post was created two days ago", () => {
  const twoDaysAgo = new Date();
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
  expect(calculatedaysAgo(twoDaysAgo.toISOString())).toEqual("2 day(s) ago");
});

test("should return '7 day(s) ago' if the post was created a week ago", () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  expect(calculatedaysAgo(sevenDaysAgo.toISOString())).toEqual("7 day(s) ago");
});

test("should return '30 day(s) ago' if the post was created a month ago", () => {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  expect(calculatedaysAgo(thirtyDaysAgo.toISOString())).toEqual(
    "30 day(s) ago"
  );
});