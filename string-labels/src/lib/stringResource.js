let loadedResources = {};
/**
 * Takes multiple string resource objects and merges them into a single one.
 * params to the right override the ones on the left.
 * For example :
 * loadResources({a: "a", b: "b"}, {a: "aa"}, {a: "aaa"})
 * will return and store {a: "aaa", b:"b"}
 */
export const loadResources = (...resources) => {
  loadedResources = resources.reduce((accumulator, current) => {
    return { ...accumulator, ...current };
  });
  return loadedResources;
};

/**
 * Returns the string stored via `loadResources` for the key `label`
 */
export const stringResource = label => {
  return loadedResources[label];
};

/**
 * sr: shortname for `stringResource`
 */
export const sr = label => {
  return stringResource(label);
};
