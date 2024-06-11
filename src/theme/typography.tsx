import {Platform, StyleSheet} from 'react-native';
import {Colors} from './colors';

/**
 * Fontweight setting
 * - This font weight will be used for style of screens where needed
 * - Check more how to use font weight with url below
 * @url https://passionui.com/docs/listar-pro/theme
 */
type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
type TypeWeight =
  | 'thin'
  | 'ultraLight'
  | 'light'
  | 'regular'
  | 'medium'
  | 'bold'
  | 'heavy'
  | 'black';
export const FontWeight: Record<TypeWeight, FontWeight> = {
  thin: '100',
  ultraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  bold: '700',
  heavy: '800',
  black: '900',
};
export const DefaultFont = 'Roboto';

export const BaseStyle = StyleSheet.create({
  textInput: {
    height: 46,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  flex1: {
    flex: 1,
  },
  flexSpacingBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxShadow: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  lineThrought: {
    textDecorationLine: 'line-through',
  },
  flexRow: {
    flexDirection: 'row',
  },
  resetPading: {
    paddingHorizontal: 0,
  },
  resetMargin: {
    margin: 0,
    marginHorizontal: 0,
    marginVertical: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    marginTop: 0,
  },
  inputBorderBottom: {
    borderWidth: 0,
    borderBottomWidth: 1,
    paddingHorizontal: 0,
    borderRadius: 0,
    ...Platform.select({
      android: {
        paddingBottom: 0,
      },
      ios: {
        paddingBottom: 8,
      },
    }),
  },
  lineUnderline: {
    textDecorationLine: 'underline',
  },
});

/**
 * Typography setting
 * - This font weight will be used for all template
 * - Check more how to use typography in url below
 * @url https://passionui.com/docs/listar-pro/theme
 */
export const Typography = StyleSheet.create({
  heading1: {
    fontSize: 24,
    fontWeight: FontWeight.bold,
  },
  heading2: {
    fontSize: 22,
    fontWeight: FontWeight.bold,
  },
  heading3: {
    fontSize: 20,
    fontWeight: FontWeight.bold,
  },
  heading4: {
    fontSize: 18,
    fontWeight: FontWeight.bold,
  },
  heading5: {
    fontSize: 16,
    fontWeight: FontWeight.bold,
    lineHeight: 24,
  },
  heading6: {
    fontSize: 14,
    fontWeight: FontWeight.regular,
    lineHeight: 24,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: FontWeight.regular,
    lineHeight: 20,
  },
  caption: {
    fontSize: 10,
    fontWeight: FontWeight.regular,
    lineHeight: 20,
  },
});
