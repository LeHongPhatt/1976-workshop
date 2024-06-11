import {StyleSheet} from 'react-native';
import {Colors, FontWeight} from 'theme';
import {dimensions} from 'utils';

const {width} = dimensions;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg_main,
  },
  wrapper: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: Colors.main,
    paddingTop: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  listHeaderContainer: {},
  listChoosenProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 12,
    marginHorizontal: 16,
    borderBottomColor: Colors.gallery,
    borderBottomWidth: 1,
  },
  lineSeparator: {
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    marginHorizontal: 16,
  },
  grayView: {height: 8, backgroundColor: Colors.bg_grey},
  iconAddress: {width: 16, height: 16},
  changeAddressButtonContainer: {
    borderRadius: 66,
    borderWidth: 1,
    borderColor: Colors.main,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  titleButtonChangeAddress: {
    color: Colors.main,
    fontSize: 12,
    lineHeight: 20,
  },
  listHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentStyle: {
    flexGrow: 1,
  },
  itemContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  itemContentContainer: {flexDirection: 'row', alignItems: 'center'},
  itemImage: {
    width: 80,
    height: 80,
    marginLeft: 8,
  },
  infoWrapper: {
    marginLeft: 12,
    justifyContent: 'space-between',
    height: 80,
    width: width - 156,
  },
  infoBottom: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  amountArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  adjustBtn: {
    borderWidth: 2,
    borderColor: Colors.disabled,
    borderRadius: 99,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerArea: {
    height: 98,
    backgroundColor: Colors.white,
    paddingTop: 16,
    borderTopColor: Colors.gallery,
    borderTopWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  btn: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 4,
  },
  addressContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  detailAddress: {
    fontSize: 12,
    lineHeight: 20,
  },
  addressToDesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconInfo: {width: 16, height: 16},
  iconPromo: {
    width: 24,
    height: 24,
    marginLeft: 12,
    marginRight: 8,
  },
  addressFromHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  noteHeader: {
    backgroundColor: Colors.bg_grey,
    paddingVertical: 8,
    flexDirection: 'row',
  },
  titleNote: {
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 16,
    marginRight: 8,
  },
  titleApplyPromo: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: FontWeight.bold,
    lineHeight: 20,
    marginLeft: 16,
    marginRight: 8,
  },
  buttonApplyPromo: {
    backgroundColor: Colors.main,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  titleDesNote: {
    fontSize: 12,
    lineHeight: 20,
  },
  textinputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginHorizontal: 16,
    borderRadius: 4,
    padding: 12,
    marginVertical: 8,
  },
  textinputPromoContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginHorizontal: 16,
    borderRadius: 4,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  billContainer: {
    paddingVertical: 12,
    // paddingHorizontal: 16)
  },
  billLineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  titleLineBill: {
    fontSize: 12,
    lineHeight: 20,
  },
  kmLineBill: {
    color: Colors.main,
    fontSize: 12,
    fontWeight: FontWeight.bold,
    lineHeight: 20,
  },
  moneyLineBill: {
    fontSize: 12,
    fontWeight: FontWeight.bold,
    lineHeight: 20,
  },
  itemGiftContainer: {paddingVertical: 10},
  giftNameTitle: {
    marginTop: 12,
    marginBottom: 4,
  },
  promoCodeContainer: {paddingVertical: 12},
});
export default styles;
