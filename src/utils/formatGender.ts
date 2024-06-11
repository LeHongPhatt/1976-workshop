export const formatGender = value => {
  switch (value) {
    case 'Nam':
      return 0;
    case 'Nữ':
      return 1;
    case 'Khác':
      return 3;
  }
};
export const formatValueGender = value => {
  switch (value) {
    case 0:
      return 'Nam';
    case 1:
      return 'Nữ';
    case 3:
      return 'Khác';
  }
};
