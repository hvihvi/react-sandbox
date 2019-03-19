import { stringResource, loadResources } from "./stringResource";

it("should land in destination object", () => {
  // given
  const resource = { hello: "Hello World" };
  const FIELDS = {
    HELLO_WORLD_FIELD: {
      label: stringResource("hello")
    }
  };
  loadResources(resource);

  // when
  const readValue = FIELDS.HELLO_WORLD_FIELD.label;

  // then
  expect(readValue).toBe("Hello World");
});
