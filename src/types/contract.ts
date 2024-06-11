export interface IContractState {
  loading: boolean;
  error: string | null;
  listContract: IContractItem[];
  listReservation: IContractItem[];
  payments: IPaymentItem[];
  paymentHistories: IPaymentHistoriesItem[];
  gifts: IGiftItem[];
  attachedFile: IFileAttach[];
  allMembers: IAllMember | any;
}

export interface IAllMember {
  customer: ICustomer;
  member: IMember[];
}

export interface ICustomer {
  address?: string; //'148/78 Nguyễn Lâm, TDP73, Khu phố 6, Phường 3, Quận Bình Thạnh, Thành Phố Hồ Chí Minh';
  address1?: string; //'';
  address2?: string; //'';
  address3?: string; //'';
  address4?: string; //'';
  address5?: string; //'';
  address6?: string; //'';
  addressno?: string; //'';
  anal_n0?: string; //'';
  anal_n1?: string; //'';
  anal_n2?: string; //'';
  anal_n3?: string; //'';
  anal_n4?: string; //'';
  anal_n5?: string; //'';
  anal_n6?: string; //'';
  anal_n7?: string; //'';
  anal_n8?: string; //'';
  anal_n9?: string; //'';
  authorizedcapital?: number; // 0;
  birthday?: number; // 1;
  birthmonth?: number; // 8;
  birthyear?: number; // 1972;
  city?: string; //'';
  comment1?: string; //'Nam It test lịch sử thao tác';
  comment2?: string; //'';
  contactaddress?: string; //'A4.10 Chung Cư Centana, 36 Đường Mai Chí Thọ, Phường An Phú, Quận 2, Thành Phố Hồ Chí Minh';
  contactaddressno?: string; //'';
  contactcity?: string; //'';
  contactcode?: string; //'';
  contactcountry?: string; //'';
  contactdistrict?: string; //'';
  contactstreet?: string; //'';
  contactward?: string; //'';
  country?: string; //'';
  createdby?: string; //'QHD@PDT';
  createddate?: string; //'2022-09-12T15:23:28';
  dagid?: string; //'';
  district?: string; //'';
  email?: string; //'khapha';
  employee?: string; //'NV00007';
  fax?: string; //'';
  gender?: string; //'F';
  idcard?: string; //'068172007906111111';
  idcard2?: string; //'';
  idcard3?: string; //'';
  issueddate?: string; //'2021-07-10T00:00:00';
  issueddate2?: null;
  issueddate3?: null;
  issuedplace?: string; //'Cục Cảnh Sát QLHC Về Trật Tự Xã Hội';
  issuedplace2?: string; //'';
  issuedplace3?: string; //'';
  lastupdate?: string; //'2022-11-22T11:07:45';
  lookup?: string; //'';
  nadcode?: string; //'C000000010';
  name?: string; //'TRƯƠNG THỊ THANH THÚY';
  prospect?: string; //'C000000019';
  status?: string; //'W';
  street?: string; //'';
  taxcode?: string; //'';
  telephone?: string; //'0123456789';
  tvcdb?: string; //'PDT';
  type?: string; //'C';
  updatedby?: string; //'NHH@PDT';
  ward?: string; //'';
  website?: string; //'';
  authorizedletter?: string; //
}

export interface IMember {
  authorizedletter?: string; //'';
  contactaddress?: string; //'1341/1A An Phú Đông 10, Phường An Phú Đông, Q. 12, Tp. Hồ Chí Minh, Việt Nam';
  contractid?: string; //'ATC000931';
  email?: string; //'nam.nguyen@phatdatrealt';
  residencyaddress?: string; //'Ấp Phước Hòa, Phước Thạnh, H. Gò Dầu, Tây Ninh, Việt Nam';
  telephone?: string; //'093400';
  name?: string;
  idx: number;
}

export interface IFileAttach {
  category?: string; //'.bpmn';
  docgroup?: string; //'';
  docnum?: string; //'221118-1149405807127-7292';
  doctype?: string; //'';
  filename?: string; //'Flow1.bpmn';
  url?: string; //'2022\\11\\18\\F\\L\\O\\W\\Z\\221118-1149405809132-6529.tvc';
}

export interface IGeneralAttach {
  file?: IFileAttach;
}
export interface IGiftItem {
  description?: string; //'Chinh sách ck 5%';
  itemcode?: string; //'';
  linenum?: number; // 1;
  promotioncode?: string; //'CKKM01';
  status?: string; //'';
  quantity?: number;
}

export interface IContractParams {
  start?: number; //skip,
  limit?: number; //limit,
  customer?: string; //user?.prospect,
  searchString?: string; //item,
  status?: any; // ['VBTT', 'HDMB', 'DBG'];
  anal_csd0?: string; //W;
}

export interface IPaymentParams {
  start?: number; //skip,
  limit?: number; //limit,
  contractid?: string; //user?.prospect,
}

export interface IContractItem {
  area?: number; //32.5;
  area1?: number; //33.5;
  area2?: number; //30;
  areaadj?: number; //1;
  blockshortname?: string; // '';
  clientname?: string; // 'Nguyễn Thị Thắm';
  contractamt?: number; // 889800000;
  contractid?: string; // 'DIY00089';
  contractvalue?: number; // 888800000;
  contractvalueadj?: number; // 1000000;
  finamt?: number; // 808909091;
  hdcno?: string; //'011/2021';
  hdmbno?: string; //'091/2021';
  holders?: string; //'Nguyễn Thị Thắm,Nguyễn Thị Kim San, Nguyễn Thị Thanh, Phạm Thị Nương,';
  loanvalue?: number; //200000000;
  mainamt?: number; //16180000;
  maintenancefee?: number; //16160000;
  maintenancefeeadj?: number; //20000;
  netvalue?: number; //808000000;
  netvalueadj?: number; //909091;
  overamt?: number; //622160000;
  paidamt?: number; //267660000;
  pptfloor?: string; //'5';
  ppttypename?: string; //'Căn hộ';
  projectname?: string; //'DỰ ÁN CĂN HỘ DIY 4.0';
  property?: string; //'DIYA01005010';
  propertynum?: string; //'A5-10';
  remainamt?: number; //638320000;
  startdate?: string; //'2021-10-19T00:00:00';
  status?: string; //'HDCQSD';
  statusname?: string; //'Hợp đồng chuyển quyền sử dụng căn hộ có thời hạn';
  vatamt?: number; //80890909;
  vatvalue?: number; //80800000;
  vatvalueadj?: number; //90909;
  bookingno?: string;
  propertylocation?: string;
  bookingdate?: string;
  project?: string;
  effectivedate?: string;
  nextpaydesc?: string;
  nextpayamt?: number;
}

export interface IPaymentItem {
  duedate?: string; // '2021-10-26T00:00:00';
  inst?: number; //1;
  instamt?: number; //88880000;
  instrate?: number; //10;
  loanvalue?: number; //0;
  paidamt?: number; //88880000;
  remainamt?: number; //0;
  progressdesc?: string; // ' Hoàn tất sàn tầng 2';
}

export interface IPaymentHistoriesItem {
  amount?: number; // 88880000;
  extdescription1?: string; //'Thu tiền thanh toán đợt 1 (10 %) KH Nguyễn Thị Thắm mã nhà ở A5-10 thuộc Dự án DỰ ÁN CĂN HỘ DIY 4.0 tại Số 16  Đường Nguyễn Đức Thuận, Phường 13, Quận Tân Bình, Thành phố Hồ Chí Minh, Việt Nam';
  transdate?: string; //'2021-10-19T00:00:00';
  transref?: string; //'PT21100001';
}
export interface IContractProps {
  item: IContractItem;
  index?: number;
}

export enum ContractNumber {
  VBTT = 'VBTT',
  HDMB = 'HDMB',
}

export interface IDetailProps {
  item?: IContractItem;
  totalContractValue?: number;
}

export enum Activetab {
  Payment = 0,
  General = 1,
  Customer = 2,
}

export enum AllMember {
  customer = 'customer',
  members = 'members',
}
