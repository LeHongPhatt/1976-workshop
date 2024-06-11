export interface IScheduleState {
  loading: boolean;
  error: string | null;
  listSchedule: [];
  oneSchedule?: IScheduleItem | null;
  typeCalendar?: [];
  bookingTimeList?: IBookingTimeItem[];
}

export interface IBookingTimeItem {
  count?: number; //0;
  endtime?: number; //720;
  limit?: number; //0;
  starttime?: number; //480;
  status?: string; //'O';
  title?: string; //'08:00';
}

export interface IScheduleItem {
  activityid: string; // 'MEET000007';
  activitytype: string; // 'ATD02';
  anal_act8: string; // '';
  anal_act9: string; // '';
  createdby: string; // 'P00000189@DM07';
  cusconfirm: string; // ' ';
  description: string; // 'tét ';
  empconfirm: string; // ' ';
  employee: string; // '';
  enddate: string; // '2022-10-16T10:  string, //59:  string, //00';
  name: string; // 'Gặp gỡ khách hàng';
  outcome: string; // 'hdhdhdaaaa';
  place: string; // 'ccggtttt';
  startdate: string; // '2022-10-16T07:55:00';
}
export interface IFormGetScheduleParams {
  start?: number;
  limit?: number;
  customer: string; // user?.prospect,
  searchString?: string; // '',
  fromdate?: string;
  todate?: string;
}

export interface IFormUpdateStateScheduleParams {
  activityid: string; // item,
  cusconfirm?: string; //
  customer?: string; //
}

export enum updateStateParams {
  R = 'C',
  C = 'R',
}
export interface IformAddSchedule {
  activityid?: string;
  activitytype: string; // selectedItemDocType,
  description: string; // noidungtext,
  startdate: string; // ngaytext + " " + giobdtext,
  enddate: string; // ngaykt,
  date: string; // diatiemtext,
  place: string; // diatiemtext,
  outcome: string; // ghichutexttext,
  prospect: string; // user?.prospect
  employee?: string;
  anal_act0?: string;
  empconfirm?: string;
  cusconfirm?: string;
  createdby?: string;
  actempname?: string;
}

export enum ETimeSchedule {
  startdate = 'startdate',
  enddate = 'enddate',
  date = 'date',
}

export interface IBookTime {
  bookdate?: string; //'yyyy-MM-dd HH:mm';
  activitytype?: string; //'ZZZ';
}

export enum EnumBookingTime {
  O = 'O',
  A = 'A',
  H = 'H',
  F = 'F',
}
