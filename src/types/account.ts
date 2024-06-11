import {callNumber} from 'utils';
import {NavigationService, Routes} from 'navigation';

export const dataAccounts = [
  {
    id: 1,
    title: 'account.info',
    onPress: () => NavigationService.navigate(Routes.KYC),
    requireLogin: true,
    icon: 'InfoUser',
  },
  {
    id: 2,
    title: 'account.order_part',
    onPress: () => NavigationService.navigate(Routes.OrderPart),
    requireLogin: true,
    icon: 'OrderPart',
  },
  {
    id: 3,
    title: 'account.order',
    onPress: () => NavigationService.navigate(Routes.HistoryOrders),
    requireLogin: true,
    icon: 'Order',
  },
  {
    id: 4,
    title: 'account.address_book',
    onPress: () => NavigationService.navigate(Routes.BookAddress),
    requireLogin: true,
    icon: 'BookAddress',
  },
  {
    id: 5,
    title: 'account.feedback',
    onPress: () => NavigationService.navigate(Routes.Feedback),
    requireLogin: true,
    icon: 'Feedback',
  },
  {
    id: 6,
    title: 'account.term',
    onPress: () => NavigationService.navigate(Routes.Term),
    icon: 'Term',
  },
  {
    id: 7,
    title: 'account.policy',
    onPress: () => NavigationService.navigate(Routes.Policy),
    icon: 'Policy',
  },
  {
    id: 8,
    title: 'account.contact',
    onPress: () => NavigationService.navigate(Routes.Contact),
    icon: 'Contact',
  },
  {
    id: 9,
    title: 'account.change_password',
    onPress: () => NavigationService.navigate(Routes.ChangePassword),
    requireLogin: true,
    icon: 'ChangePassword',
  },
  {
    id: 10,
    title: 'account.request_delete',
    onPress: () => NavigationService.navigate(Routes.RequestDelete),
    requireLogin: true,
    icon: 'RequestDelete',
  },
];
export const dataContacts = [
  {
    id: 1,
    title: '1976 The Coffee & Harley Davidson',
    onPress: () => {},
    requireLogin: true,
  },
  {
    id: 2,
    title: '23 đường số 17, khu B, P. An Phú, (Q.2 cũ) TP, Thủ Đức, HCM',
    onPress: () => {},
    requireLogin: true,
  },
  {
    id: 3,
    title: 'Hotline: 0939.319.839',
    onPress: () => callNumber('0939319839'),
    isViewTouch: true,
  },
  {
    id: 4,
    title: 'Email: 1976workshop@gmail.com',
    onPress: () => {},
  },
];

export interface IAccountState {
  loading: boolean;
  error: string | null;
  language: string;
}
export type TSendRequest = 'remove_account' | 'feed_back';
export interface ISendRequest {
  type: TSendRequest;
  description: string;
}
