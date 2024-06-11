const spacing = {
  'mt-': 'marginTop',
  'mb-': 'marginBottom',
  'mr-': 'marginRight',
  'ml-': 'marginLeft',
  'mx-': 'marginHorizontal',
  'my-': 'marginVertical',
  'pt-': 'paddingTop',
  'pb-': 'paddingBottom',
  'pr-': 'paddingRight',
  'pl-': 'paddingLeft',
  'px-': 'paddingHorizontal',
  'py-': 'paddingVertical',
  'm-': 'margin',
  'p-': 'padding',
};
export const styleSpacing = key => {
  for (const [prefix, prop] of Object.entries(spacing)) {
    if (key.indexOf(prefix) === 0) {
      const num = Number(key.split(prefix)[1]);
      return {[prop]: num};
    }
  }
  return {};
};
