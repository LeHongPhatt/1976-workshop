import {dimensions} from 'utils';
import {Platform, StyleSheet} from 'react-native';
import {Colors} from 'theme';
const isIos = Platform.OS === 'ios';
const {width} = dimensions;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main,
  },
  pr5: {
    paddingRight: 5,
  },
  wrapLogo: {
    alignItems: 'center',
    ...Platform.select({
      android: {
        marginBottom: 16,
      },
      ios: {
        marginTop: 10,
        marginBottom: 16,
      },
    }),
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  boxLogo: {
    width: width,
    height: 170,
    position: 'relative',
  },
  main: {padding: 24, flex: 1},
  rowItem: {
    flexDirection: 'row',
  },
  spaceItem: {
    justifyContent: 'space-between',
  },
  topU10: {
    top: -15,
  },
  cenItem: {
    alignItems: 'center',
  },
  endItem: {
    justifyContent: 'flex-end',
  },
  cenItemvh: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCondition: {
    alignContent: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
  btnActive: {
    backgroundColor: Colors.main,
  },
  btlogi: {
    backgroundColor: Colors.border,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.transparent,
  },
  btlog: {
    marginTop: 30,
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
  },
  txtdn: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
  input: {
    height: 56,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    marginBottom: 24,
    borderColor: Colors.white,
    color: Colors.white,
    backgroundColor: Colors.main,
  },
  form: {
    marginBottom: isIos ? 70 : 40,
    alignItems: 'flex-start',
  },
  fieldTextRequired: {
    color: Colors.error,
    textAlign: 'left',
  },
});
