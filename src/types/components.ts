import {ReactNode} from 'react';

export interface ITimer {
  timer: number;
  startTimer: (time: number) => void;
  stopTimer: () => void;
}

export interface ICountDownProps {
  start?: number;
  fps?: number;
}

export type TmodeContent = 'light-content' | 'dark-content' | 'default';
export interface ITimeLineProps {
  data?: [];
}

export interface IItemVote {
  name: string;
  qty: number;
}

export interface IItemTicket {
  id?: string;
  name?: string;
  status: string;
  route?: string;
  pay_method?: string;
  discount?: string;
  amount?: number;
  time?: string;
  emotion?: any[];
}
export interface IBannerADV {
  data?: IBannerADVItem[];
  children?: ReactNode;
}

export interface IBannerADVItem {
  title?: string;
  content?: string;
  detail?: string;
}

export interface IImageViewerProps {
  children?: ReactNode;
  style?: any;
  visible?: boolean;
  data?: any;
  isDocumentCode?: boolean;
  isCustom?: boolean;
  seletedItem?: any;
  projectname?: string;
}

export interface ISwiperProps {
  images?: [];
  visible: boolean;
  toggleModal?: () => void;
}

export interface IListItemProps {
  screenType?: string;
  item?: any;
  pinType?: string;
}

export interface INotiComponent {
  list?: [];
  isAll: boolean;
}

declare module '@env';
