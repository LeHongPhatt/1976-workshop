export const normalizeAccent = (str = '') => {
  return (
    str
      // ?.replaceAll(' ', '_') //optional: replace white space with underscore
      ?.toLowerCase()
      ?.normalize('NFD')
      ?.replace(/[\u0300-\u036f]/g, '')
  );
};
