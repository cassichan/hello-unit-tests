import { sum } from "../src/index.js";
import { multiply } from "../src/index.js";

it("Should add 2 numbers and return the sum", () => {
  //arrange
  const a = 4,
    b = 5,
    expected = 9;

  //act
  const actual = sum(a, b);

  //assert
  expect(actual).toBe(expected);
});

it("Should add a number and null and return an error", () => {
  //arrange
  const a = null,
    b = 5,
    expected = "The input is incorrect!";

  //act
  const actual = sum(a, b);

  //assert
  expect(actual).toBe(expected);
});

it("Should add a number and a string and return an error", () => {
  //arrange
  const a = "str",
    b = 5,
    expected = "are allowed";

  //act
  const actual = sum(a, b);

  //assert
  expect(actual).toContain(expected);
});

//Test multiply function
it("Should multiply 2 numbers and return the product", () => {
  //arrange
  const a = 4,
    b = 5,
    expected = 20;

  //act
  const actual = multiply(a, b);

  //assert
  expect(actual).toBe(expected);
});

it("Should multiply a number and null and return an error", () => {
  //arrange
  const a = null,
    b = 5,
    expected = "The input is incorrect!";

  //act
  const actual = multiply(a, b);

  //assert
  expect(actual).toBe(expected);
});

it("Should add a number and a string and return an error", () => {
  //arrange
  const a = "str",
    b = 5,
    expected = "are allowed";

  //act
  const actual = multiply(a, b);

  //assert
  expect(actual).toContain(expected);
});
