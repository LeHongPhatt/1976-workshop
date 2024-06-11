import {Platform, StyleSheet} from 'react-native';
import {Colors} from 'theme';
const isIos = Platform.OS === 'ios';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main,
  },
  wrapLogo: {
    alignItems: 'center',
    marginTop: 8,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  boxLogo: {
    width: 250,
    height: 250,
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
  btlogi: {
    backgroundColor: Colors.border,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.transparent,
    height: 56,
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
    marginBottom: 16,
    borderColor: Colors.white,
    color: Colors.white,
    backgroundColor: Colors.main,
  },
  wrapTitle: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
