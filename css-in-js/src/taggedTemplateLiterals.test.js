it("should pass tagged template to function", () => {
  // given
  const exempleFunction = (strings, ...keys) => "Hello " + strings[0] + keys[0] + strings[1] + keys[1];
  const exclamationMarks = "!!!";
  const name = "hvi";

  // when
  const result = exempleFunction`World ${exclamationMarks} My name is ${name}`;

  // then
  expect(result).toEqual("Hello World !!! My name is hvi");
});

it("should pass tagged template to curried function", () => {
  // given
  const exempleFunction = name => (strings, ...keys) =>
    "Hello " + strings[0] + keys[0] + " My name is " + name;
  const exclamationMarks = "!!!";
  const name = "hvi";

  // when
  const result = exempleFunction(name)`World ${exclamationMarks}`;

  // then
  expect(result).toEqual("Hello World !!! My name is hvi");
});
