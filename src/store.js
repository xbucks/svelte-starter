import { writable, readable, derived } from "svelte/store";

export const amountOfCoolPoints = writable(0);

export const timeBasedLevel = readable(1, (update) => {
  const interval = setInterval(() => {
    const nVal = Math.floor(Math.random() * 10);
    update(nVal);
  }, 1000);

  return () => clearInterval(interval);
});

export const timeBasedCoolPoints = derived(
  [timeBasedLevel, amountOfCoolPoints],
  (values) => {
    const [TBLevel, cPoints] = values;
    return TBLevel * cPoints;
  },
);
