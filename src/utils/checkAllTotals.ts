import { WalksAndRuns } from "../../Types";

export const calculateTotalWalks = (data: WalksAndRuns[]): number => {
  const walks = data.filter((workout) => {
    return workout.workout_type === "walk";
  });

  return walks.length;
};

export const calculateRuns = (data: WalksAndRuns[]): number => {
  const runs = data.filter((workout) => {
    return workout.workout_type === "run";
  });

  return runs.length;
};

export const calculateGymSessions = (data: WalksAndRuns[]): number => {
  const gymSessions = data.filter((workout) => {
    return workout.workout_type === "gym";
  });

  return gymSessions.length;
};

export const totalSteps = (data: WalksAndRuns[]): number => {
  const totalSteps = data.reduce(
    (a, b) => <WalksAndRuns>{ steps: a.steps + b.steps }
  );

  return totalSteps.steps;
};
