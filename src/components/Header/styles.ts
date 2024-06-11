import {StyleSheet, Platform} from 'react-native';
import {Colors} from 'theme';
import {Typography} from 'theme/typography';

export default StyleSheet.create({
  contain: {
    backgroundColor: Colors.main,
    paddingHorizontal: 16,
    paddingBottom: 10,
    justifyContent: 'space-between',
    ...Platform.select({
      android: {paddingTop: 10},
      ios: {},
    }),
  },
  row: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  flex1: {flex: 1},
  headLine: {
    ...Typography.heading5,
  },
  txtWhiteUp: {
    color: Colors.white,
    textTransform: 'uppercase',
  },
  txtDark: {
    color: Colors.black,
  },
  txtWhite: {
    color: Colors.white,
    ...Typography.subtitle,
  },
  contentLeft: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  centVHItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentSearchCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginLeft: 25,
  },
  contentRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 10,
    paddingRight: 20,
    height: '100%',
  },
  contentRightSecond: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 10,
    paddingRight: 10,
    height: '100%',
  },
  right: {
    justifyContent: 'center',
  },

  textSearch: {
    backgroundColor: Colors.white,
    color: Colors.textBlack,
    borderRadius: 100,
    height: 34,
  },
  iconLeft: {
    // justifyContent: 'flex-start',
  },
  viewSearch: {},
  boxLogo: {
    width: 107,
    height: 40,
  },
  viewLogo: {
    position: 'absolute',
  },
  avatarLeft: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },

  viewInfo: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 30,
  },
  imgItem: {
    width: 42,
    borderRadius: 50,
    marginLeft: 10,
    height: 42,
    alignSelf: 'center',
  },

  infoMiddleView: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 6,
    justifyContent: 'center',
  },
  infoProvince: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.white,
  },
  infoCount: {
    fontSize: 10,
    fontWeight: '400',
    color: Colors.white,
  },
});
