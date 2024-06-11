import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  hidden: {
    display: 'none',
  },
  resetPadding: {
    padding: 0,
  },
  contentModal: {
    flex: 1,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 25,
  },
  pdHorzi50: {
    paddingHorizontal: 45,
  },
  mgVertzi20: {
    marginVertical: 20,
  },
  mgBot15: {
    marginBottom: 15,
  },
  bottomAction: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'flex-end',
  },
  mr10: {
    marginRight: 10,
  },
  flex1: {
    flex: 1,
  },
});
export default styles;
