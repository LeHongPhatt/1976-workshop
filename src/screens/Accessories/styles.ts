import {StyleSheet} from 'react-native';
import {Colors} from 'theme';

export default StyleSheet.create({
  py16: {
    paddingVertical: 16,
  },
  px8: {
    paddingHorizontal: 8,
  },
  rowItem: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  mr4: {
    marginRight: 4,
  },
  mt2: {
    marginTop: 2,
  },
  h100: {
    height: '100%',
  },
  wrpHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSearch: {
    marginRight: 8,
  },
  wrpIconCart: {
    position: 'relative',
  },
  badge: {
    backgroundColor: 'black',
    position: 'absolute',
    top: -4,
    right: -8,
    borderRadius: 12,
    paddingHorizontal: 4,
  },
  bgContent: {
    backgroundColor: Colors.bg_main,
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    marginHorizontal: 8,
  },
  // shadow: {
  //     shadowOffset: { width: 3, height: -10 },
  //     shadowColor: 'black',
  //     shadowRadius: 6,
  //     shadowOpacity: 0.1
  // },
  imgCard: {
    height: 176,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  contentCard: {
    padding: 8,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContent: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: Colors.main,
    borderRadius: 8,
    padding: 4,
  },
  btn: {
    borderColor: Colors.white,
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderRadius: 50,
    height: 28,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
  btnSelected: {
    borderColor: Colors.main,
  },
  tabBarLabelStyle: {
    color: Colors.main,
    fontSize: 12,
    fontWeight: '600',
  },
  tabBarIndicatorStyle: {
    backgroundColor: Colors.main,
  },
  pb175: {
    paddingBottom: 175,
  },
});
