import {Routes} from 'navigation';

export interface INotificationState {
  loading: boolean;
  error: string | null;
  language: string;
  noties: INotificationItem[];
}
export type TNoti =
  | 'update_point'
  | 'update_order_status'
  | 'update_guarantee_status'
  | 'update_repair_status'
  | 'notification_detail';
export interface INotificationItem {
  id: number;
  type: TNoti;
  title: string;
  data: any[];
  is_read: boolean;
  created_at?: Date;
}
export const NOTIFICATION_TYPE = {
  update_point: 'update_point',
  update_order_status: 'update_order_status',
  update_guarantee_status: 'update_guarantee_status',
  update_repair_status: 'update_repair_status',
  notification_detail: 'notification_detail',
};
interface INotiRouter {
  navigation: Routes;
  screen: Routes;
}
export const NOTIFICATION_ROUTER: Record<TNoti, INotiRouter> = {
  [NOTIFICATION_TYPE.update_point]: {
    navigation: Routes.News,
    screen: null,
  },
  [NOTIFICATION_TYPE.update_order_status]: {
    navigation: Routes.News,
    screen: Routes.News,
  },
  [NOTIFICATION_TYPE.update_guarantee_status]: {
    navigation: Routes.News,
    screen: Routes.News,
  },
  [NOTIFICATION_TYPE.update_repair_status]: {
    navigation: Routes.News,
    screen: Routes.News,
  },
  [NOTIFICATION_TYPE.notification_detail]: {
    navigation: Routes.News,
    screen: null,
  },
};
