import { BooleanObject } from "shared/types/mainPage.types";

export const calculatePercentage = (checkboxStates: BooleanObject) => {
  const trueValuesCount = Object.values(checkboxStates).reduce(
    (count, value) => (value ? count + 1 : count),
    0
  );

  if (trueValuesCount === 0) {
    return 1;
  } else if (trueValuesCount === 1) {
    return 11;
  } else if (trueValuesCount === 2) {
    return 22;
  } else if (trueValuesCount === 3) {
    return 34;
  } else if (trueValuesCount === 4) {
    return 51;
  } else if (trueValuesCount === 5) {
    return 55;
  } else if (trueValuesCount === 6) {
    return 100;
  } else {
    return 1;
  }
};
