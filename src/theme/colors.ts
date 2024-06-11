/**
 * @description define all colors value used in project
 */

export interface IColors {
  white: string;
  black: string;
  transparent: string;
  main: string;
  bg_main: string;
  bg_grey: string;
  bg_orange: string;
  disabled: string;
  color_f9: string;
  success: string;
  error: string;
  warning: string;
  border: string;
  color_3a: string;
  gallery: string;
  color_52: string;
  color_33: string;
  color_84: string;
  blue: string;
  color_e5: string;
}

export const Colors: IColors = {
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  main: '#F04E23',
  bg_main: '#252528',
  bg_grey: '#515159',
  bg_orange: '#F47121',
  disabled: '#ADB1B9',
  color_f9: '#F9C9AC',
  success: '#37B24D',
  error: '#E72E2E',
  warning: '',
  border: '#ADB3BC',
  color_3a: '#3A3A3C',
  gallery: '#EEEEEE',
  color_52: '#522B17',
  color_33: '#333333',
  color_84: '#848589',
  blue: '#007AFF',
  color_e5: '#E5E5E5',
};
export const hexToRgb = (hex: string, a = 1) => {
  const rs = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  console.log('rs', rs);
  if (rs) {
    return hex;
  }
  const r = parseInt(rs?.[1], 16);
  const g = parseInt(rs[2], 16);
  const b = parseInt(rs[3], 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
