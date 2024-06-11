import { StyleSheet } from 'react-native';
import { Colors } from 'theme';

export default StyleSheet.create({
  padHeader: {
    paddingHorizontal: 16,
    paddingVertical: 7,
  },
  container: {
    flex: 1,
  },
  bgHead: {
    backgroundColor: Colors.black,
  },
  boxDriver: {
    height: 30,
  },
  boxLogo: {
    width: 140,
    height: 48,
  },
  badget: {
    backgroundColor: Colors.error,
    width: 8,
    height: 8,
    borderRadius: 50,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  mr17: { marginRight: 17 },
  centItem: {
    alignItems: 'center',
  },
  endItemvh: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  posRelative: {
    position: 'relative',
  },
});
