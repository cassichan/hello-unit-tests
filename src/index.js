export const sum = (a, b) => {
  if (!a || !b) {
    return "The input is incorrect!";
  }
  if (typeof a != "number" || typeof b != "number") {
    return "Only numbers are allowed";
  }

  return a + b;
};

export const multiply = (a, b) => {
  if (!a || !b) {
    return "The input is incorrect!";
  }
  if (typeof a != "number" || typeof b != "number") {
    return "Only numbers are allowed";
  }

  return a * b;
};
