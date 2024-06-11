export interface IProjectDetailState {
  loading: boolean;
  error: string | null;
  imagesList: IProjectImage[];
  detail: IDetailProjectItem;
  group: IGroupItem[];
  groupBDS: IGroupBDSItem[];
  stackingPlan: IStackingPlanProject[];
  timeLine: ITimeLineItem[];
  timeLineImage: [];
}

export interface IStackingPlanProject {
  anal_ppt0?: string; // '';
  area?: number; //0;
  area2?: number; //30;
  block?: string; //'DIYB01';
  blockshortname?: string; //'B';
  gardenarea?: number; // 0;
  level0?: string; //'3PN';
  level0dis?: string; //'3PN';
  maintenancefee?: number; // 16312000;
  pptbedroom?: string; //'';
  pptdirection?: string; //'Nam';
  pptfloor?: string; //'3';
  pptgroup?: string; //'05';
  pptlenght?: number; // 0;
  pptview?: string; //'';
  pptwidth?: number; // 0;
  property?: string; //'DIYB01003017';
  propertynum?: string; //'B3-17';
  propertytype?: string; //'CH';
  propertyvalue?: number; //897160000;
  status?: string; //'MBA';
  typename?: string; //'Căn hộ';
  wing?: string; //'C';
}
export interface IGroupBDSItem {
  groupname?: string; //'1 PN VIP';
  level0?: string; //'1PN';
  level0dis?: string; //'1PN';
  openqty?: number; // 44;
  pptgroup?: string; // '01';
  totalqty?: number; // 62;
}

export interface IImageParams {
  start?: number; //skip,
  limit?: number; //limit,
  project: string; //user?.prospect,
  docgroup?: string;
  appcode?: string; //'CC';
  level0?: string; //'CC';
  doctype?: string; // "MBDA"
}

export interface IProjectImage {
  category?: string; //'.png';
  docgroup?: string; //'GALLERY';
  docnum?: string; //'210812-105905350-9D3B90DF';
  doctype?: string; //'';
  filename?: string; //'Dự_án_Metro_Star_2.jpg';
  url?: string; //'D\\Z\\Z\\Z\\N\\210812-105905350-892E6D77.tvc';
}
export interface IGroupItem {
  category?: string; //'PPJGRPATTA';
  pptgroup?: string; //'1PN';
  project?: string; //'ATC';
  title?: string; //'1 VIP bedroom';
  tvcdb?: string; //'PDT';
}

export interface IDetailProjectItem {
  address?: string; // '';
  area?: number; // 7000;
  contactaddress?: string; // '';
  contactemail?: string; // '';
  einvestname?: string; // '';
  highlights?: string; // '';
  hotline?: string; // '';
  investname?: string; // '';
  latitude?: number; // 10.8318259;
  level0?: any; // ['Object'];
  longitude?: number; // 106.7626472;
  project?: string; // 'MTS';
  projectdesc?: string | any; // '';
  projectname?: string; // 'Dự án Metro Star';
  projecttype?: string; // '01';
  quantity?: number; // 385;
  shortname?: string; // 'METRO STAR';
  taxcode?: string; // '';
  timemode?: string; // 'VV';
  timemodedesc?: string; // 'Vĩnh viễn';
  typename?: string; // 'Sở hữu vĩnh viễn';
  typenameen?: string; // 'Own forever';
  utilities?: string; // '';
  website?: string; // '';
  handoverdate?: string;
}

export interface IParamStacking {
  start?: number; //0, // skip,
  limit?: number; //25, // limit,
  project?: string; //'', // project,
  block?: string; //'',
  wing?: string; //'',
  floor?: string; //'',
  propertynum?: string; //'',
  level0?: string; //'', /
}

export interface IParamTimeline {
  start?: number; //0, // skip,
  limit?: number; //25, // limit,
  project?: string; //'', // project,
}

export interface ITimeLineItem {
  filename?: string; //'01_Flash_Screen03.png';
  issuedmonth?: number; //11;
  issuedyear?: number; //2022;
  newsid?: string; //'221124-1015472763992-3A26';
  title?: string; //'Xây móng';
  url?: string; //'2022\\11\\24\\Z\\Z\\Z\\F\\L\\221124-1014570157988-A3EA.tvc';
  yearnmonth?: string;
}

export interface IImageTimeLine {
  start?: number; //0;
  limit?: number; //25;
  newsid: string; //
}
