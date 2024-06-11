import {IDetailProjectItem} from './projectDetail';

export interface IPlanState {
  loading: boolean;
  error: string | null;
  planDetail: IPlanItem[];
  imageList: IImageItem[];
  listProject: IDetailProjectItem[];
  listBlock: IBlockItem[];
  listWing: IWingItem[];
  listFloor: IFloorItem[];
  colorData: IColorDataItem[];
  stackingPlan: IStackingItem[];
}

export interface IStackingItem {
  anal_ppt0?: string; //'';
  area?: number; //0;
  area2?: number; //33;
  block?: string; //'DIYB01';
  blockshortname?: string; //'B';
  fontColor?: string; //'000000';
  gardenarea?: number; // 0;
  level0?: string; //'3PN';
  level0dis?: string; //'3PN';
  maintenancefee?: number; // 17624000;
  pptbedroom?: string; //'';
  pptdirection?: string; //'Bắc';
  pptfloor?: string; //'2';
  pptgroup?: string; //'05';
  pptlenght?: number; // 0;
  pptview?: string; //'';
  pptwidth?: number; //0;
  property?: string; //'DIYB01002028';
  propertynum?: string; //'B2-28';
  propertytype?: string; //'CH';
  propertyvalue?: number; //969320000;
  status?: string; //'MBA';
  statusColor?: string; //'ffffff';
  statusname?: string; //'Mở bán';
  typename?: string; //'Căn hộ';
  wing?: string; //'C';
}

export interface IColorDataItem {
  colorid?: string; //'002060';
  fontcolor?: string; //'ffffff';
  name?: string; //'Khóa căn';
  sorting?: number; // 0;
  status?: string; // 'KHOA';
  total?: number; // 1;
}

export interface IFloorItem {
  pptfloor?: string;
}
export interface IWingItem {
  wing?: string; //'A';
  wingname?: string; //'Cánh A tòa nhà DIY';
}

export interface IBlockItem {
  block?: string; //'MTST02';
  name?: string; //'Tháp T2 dự án Metro Star';
  project?: string; //'MTS';
}

export interface IImageItem {
  category?: string; //'.png';
  docnum?: string; //'210821-163817982-0B2AC3A3';
  doctype?: string; //'3PN';
  filename?: string; //'thiet-ke-noi-that-chung-cu-3-phong-ngu-16.jpg';
  url?: string; //'T\\H\\I\\E\\T\\210821-163817982-6E965BBA.tvc';
}

export interface IPlansParams {
  start?: number; //0;
  limit?: number; //25;
  project?: string; //  projectma,
  block?: string; //block,
  wing?: string; //wing,
  floor?: string; //pptfloor,
  propertynum?: string; //id,
}

export interface IPlanImageParams {
  start?: number; //0;
  limit?: number; //25;
  project?: string; //  projectma,
  pptgroup?: string; // pptgroupite,
  property?: string; // propertyitem,
}

export interface IPlanItem {
  anal_ppt0?: string; // '02';
  area?: number; //0;
  area2?: number; //30;
  block?: string; //'DIYA01';
  blockshortname?: string; //'';
  fontColor?: string; //'000000';
  gardenarea?: number; // 0;
  pptbedroom?: string; //'';
  pptdirection?: string; //'';
  pptfloor?: string; //'G';
  pptgroup?: string; //'';
  pptlenght?: number; // 0;
  pptview?: string; //'';
  pptwidth?: number; // 0;
  property?: string; //'DIYA01001SH12';
  propertynum?: string; //'SH12';
  propertytype?: string; //'TM';
  status?: string; //'GCH';
  statusColor?: string; //'ff0000';
  statusname?: string; //'Giữ chỗ';
  typename?: string; //'Kiot thương mại';
  wing?: string; //'A';
  level0?: string; // '3PN';
  level0dis?: string; // '3PN';
  maintenancefee?: number; // 17624000;
  propertyvalue?: number;
}

export interface IFormStacking {
  project?: string;
  block?: string;
  wing?: string;
  pptfloor?: string;
}

export interface IStackingPlan {
  project?: string;
}

export interface IDTTypeProps {
  data?: any;
  onPress: (value: any) => void;
  selectedItem?: any;
  isProject?: boolean;
  isBlock?: boolean;
  isWing?: boolean;
  isFloor?: boolean;
}
