import {StyleSheet} from 'react-native';
import {Colors} from 'theme';

export default StyleSheet.create({
  wrapLogo: {
    alignItems: 'center',
    marginTop: 8,
  },
  wrapTitle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.border,
  },
  cenItemvh: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  h100: {
    height: '100%',
  },
  posBtnTitle: {
    bottom: 5,
    right: 5,
  },
  posAbsolute: {
    position: 'absolute',
  },
  wrapBtnTitle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.main,
    borderWidth: 1,
    borderColor: Colors.white,
  },
});
