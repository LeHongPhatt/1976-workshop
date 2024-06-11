import {StyleSheet} from 'react-native';
import {Colors} from 'theme';
import {Typography} from 'theme/typography';

export default StyleSheet.create({
  default: {
    height: 48,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  textDefault: {
    ...Typography.heading6,
    color: Colors.white,
    fontWeight: '700',
  },
  outline: {
    borderWidth: 1,
  },
  shadow: {shadowColor: Colors.black, shadowOpacity: 0.9},
  full: {
    width: '100%',
    alignSelf: 'auto',
  },
  round: {
    borderRadius: 28,
  },
  padLeft5: {paddingLeft: 5},
  actionBottom: {
    padding: 24,
    paddingTop: 10,
    flexDirection: 'row',
  },
  btnActive: {
    backgroundColor: Colors.main,
  },
  lh24: {
    lineHeight: 24,
  },
  fw400: {
    fontWeight: '400',
  },
  flex1: {
    flex: 1,
  },
  btlogi: {
    backgroundColor: Colors.border,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.transparent,
  },
  fs16: {
    fontSize: 16,
  },
  ml8: {
    marginLeft: 8,
  },
});
