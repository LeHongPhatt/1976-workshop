import {StyleSheet, Platform} from 'react-native';
import {Colors} from 'theme';
import {dimensions} from 'utils';
const {height, width} = dimensions;
export default StyleSheet.create({
  nextButton: {
    backgroundColor: Colors.main,
    borderRadius: 8,
    width: width / 2,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      android: {},
      ios: {
        marginBottom: 60,
      },
    }),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWhite: {
    color: Colors.white,
    fontSize: 15,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 87, 34, .9)',
    borderRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  image: {
    resizeMode: 'stretch',
    width,
    height,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.white,
  },
  bgLotie: {flex: 1, backgroundColor: Colors.main},
});
