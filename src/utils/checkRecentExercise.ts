import RecentActivity from "@/components/RecentActivity/RecentActivity";

export const findRecentExercise = (arr) => {
  return arr ? arr[arr.length - 1] : null;
};
