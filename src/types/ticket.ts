import {ReactNode} from 'react';
import {IFormImgData} from './user';

export interface IDataTypeItem {
  budgetcheck?: string; //"N",
  budgetstop?: string; //"N",
  category?: string; // 'TCKCLASS';
  code?: string; //'1';
  codenname?: string; //'1 - Hợp đồng - Chuyển nhượng';
  comments?: string; //'attach 2';
  createdby?: string; //'TVC@DM07';
  createddate?: string; // '2021-04-16T16:32:56';
  dagid?: string; // '';
  lastupdate?: string; // '2021-08-31T14:30:44';
  lookup?: string; //'';
  name?: string; // 'Hợp đồng - Chuyển nhượng';
  prohibitpost?: string; // 'N';
  ref0?: string; //'';
  ref1?: string; //'';
  ref2?: string; //'';
  ref3?: string; //'';
  ref4?: string; //'';
  ref5?: string; //'';
  ref6?: string; //'';
  ref7?: string; //'';
  ref8?: string; //'';
  ref9?: string; //'';
  status?: string; // 'W';
  tvcdb?: string; // 'DM07';
  updatedby?: string; // 'DTT@DM07';
}

export interface IDataComboItem {
  name: string; // 'Ban quản lý dự án';
  wklcode: string; // 'BQLDA';
}

export interface IDataSuportItem {
  createdby?: string; //'APPCUS@DM07';
  finishdate?: string; //'2022-10-07T10:17:58';
  lastcomment?: string; //'Test comment';
  requestdate?: string; //'2022-10-07T10:17:36';
  status?: string; //'D';
  statusname?: string; //'Hoàn tất';
  ticketcategory?: string; //'Hợp đồng';
  ticketclass?: string; //'Hợp đồng - Chuyển nhượng';
  ticketdesc?: string; //'tttetsssttt';
  ticketdetail?: string; //'Chính sách bán hàng';
  ticketid?: string; //'2200203';
  title?: string; //'teeeeettttttt close';
}

export interface ITicketState {
  loading?: boolean;
  error: string | null;
  dataType: IDataTypeItem[];
  dataGroup: IDataTypeItem[];
  dataCat: IDataTypeItem[];
  dataCom: IDataComboItem[];
  dataSupport: IDataSuportItem[];
  selectedTicket: IDataSuportItem;
  isOpen: boolean;
  loadingComment: boolean;
  attachFile: IFileData[];
  histories: IHistoryItem[];
}

export interface ITicketParams {
  ref0?: string;
  customer?: string;
  searchString?: string;
  ticketid?: string;
  contents?: string;
}

export interface IFileParams {
  start?: number;
  limit?: number;
  linkto?: string;
  referencekey1?: string; //id,
  referencekey2?: string;
  autonum?: string;
}

/**
 * @description the interface of user register entity
 * @export
 * @interface IFormRegisterData
 */
export interface IFormSupportTicker {
  tic?: string;
  title?: string;
  ticketclass?: string;
  ticketcategory?: string;
  ticketdetail?: string;
  ticketcombo?: string;
  ticketdesc?: string;
  requestdate?: string;
  customer?: string;
  classname?: string;
  dataFile?: IFormImgData[];
  contents?: string;
  ticketid?: string;
  contractid?: string;
  anal_tck0?: string; // current propertynum
  anal_tck1?: string; // current project
  anal_tck2?: string; // current property
  ticketchannel?: string;
  ccapp?: string;
}

export interface IFormComment {
  ticketid?: string;
  contents?: string;
}

export interface ISupportTicketItem {
  categoryname: string; // 'Thanh toán';
  classname: string; //string; //'Hợp đồng - Chuyển nhượng';
  createdby: string; //'NHH@DM07';
  detailname: string; //'Xác nhận thanh toán';
  picname: string; //'Trương Nguyễn Tường Khánh';
  requestdate: string; //'2021-10-12T08:52:00';
  status: string; //'O';
  statusname: string; //'Mới';
  ticketcategory: string; //'104';
  ticketclass: string; //'1';
  ticketdesc: string; //'';
  ticketdetail: string; //'1018';
  ticketid?: string; //'2100004';
  title: string; //'Xác nhận thanh toán đợt 1 căn hộ A2-08 ';
  comment?: string;
  lastcomment?: string;
  duedate?: string;
  finishdate?: string;
}

export interface IFileData {
  autonum?: string; //  '20221007-155616lin-RHZYnI';
  category?: string; //'pdf';
  comments?: string; //'';
  createdby?: string; //'SYS';
  createddate?: string; //'2022-10-07T15:56:21';
  doctype?: string; //'';
  documentcode?: string; //'20221007-155616doc-OHncTS';
  filename?: string; //'pdf-test.pdf';
  isdefault?: string; //'N';
  linkto?: string; //'TCK';
  lookup?: string; //'';
  referencekey1?: string; //'2200217';
  referencekey2?: string; //'';
  referencekey3?: string; //'';
  referencekey4?: string; //'';
  referencekey5?: string; //'';
  subject?: string; //'pdf-test.pdf';
  tvcdb?: string; //'DM07';
  url?: string; //'2022\\10\\07\\P\\D\\F\\Z\\T\\221007-1556219891327-42D1.tvc';
}

export interface IHistoryItem {
  actiontype?: string; //'C';
  contents?: string; //'Nói chơi thôi ';
  createddate?: string; //'2022-01-11T14:27:27';
  employee?: string; //'';
  isinternal?: string; //'C';
  logid?: string; //'220111-1427271642053-F57E';
  empname?: string;
}

export interface ITicketItemProps {
  data?: ISupportTicketItem;
  isDetail?: boolean;
}

export interface IItemFilter {
  id: number;
  title: string;
  dateFrom?: any;
  dateTo?: any;
  status: any;
}

export interface IFileAttach {
  file: IFileData;
}

export interface IFileUpload {
  documentcode?: string; //genCodeByStr('doc'),
  autonum?: string; //genCodeByStr('lin'),
  filename?: string; //item?.name,
  subject?: string; //item?.name,
  category?: string; //getFileExtension(item?.name),
  data?: string; //ImagesBase,
  linkto?: string; //'TCK',
  referencekey1?: string; //ticketId,
  referencekey2?: string; //'',
}

export enum EStatus {
  O = 'O',
  D = 'D',
  P = 'P',
}

export interface ISupportProps {
  children: ReactNode;
}

export interface IHistoryProps {
  ticketid?: string;
}

export interface IParamsAddLink {
  referencekey1: string | undefined;
  linkto: string | undefined;
}
