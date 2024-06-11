import {Colors} from 'theme';
import {EXCHANGE_STATUS} from 'types';

export const statusDelivery = status => {
  let value = {};
  switch (status) {
    case EXCHANGE_STATUS.DELIVERING:
      value = {
        title: 'Đang giao hàng',
        color: '',
      };
      break;
    case EXCHANGE_STATUS.PENDING:
      value = {
        title: 'Đang xử lý',
        color: '#EFB64C',
      };
      break;
    case EXCHANGE_STATUS.CANCEL:
      value = {
        title: 'Hủy',
        color: '',
      };
      break;
    case EXCHANGE_STATUS.SUCCESS:
      value = {
        title: 'Hoàn tất',
        color: '#16B57F',
      };
      break;
    case EXCHANGE_STATUS.RECEIVED:
      value = {
        title: 'Tiếp nhận',
        color: '#3A3A3C',
      };
      break;
    default:
      break;
  }

  return value;
};
export const statusPayment = status => {
  let value = {};
  if (status) {
    value = {
      title: 'Đã thanh toán',
      color: Colors.success,
    };
  } else {
    value = {
      title: 'Chưa thanh toán',
      color: Colors.main,
    };
  }
  return value;
};
