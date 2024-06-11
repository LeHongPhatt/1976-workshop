import {IProjectImage} from './projectDetail';

export interface IDocumentsState {
  loading: boolean;
  error: string | null;
  documents: IDocumentItem[];
  imageList: IProjectImage[];
  dataIntro: IDataIntro[];
  pubDocFile: any;
}

export interface IDocumentItem {
  category?: string; //'.xlsx';
  docgroup?: string; //'P';
  docnum?: string; //'210812-162653634-71B34310';
  doctype?: string; //'BM';
  doctypename?: string; //'Biểu mẫu';
  filename?: string; //'SS-DIYAS_SKY-PHIEU_GIU_CHO_KHONG_HOAN_LAI_CĐT-KHÁCH_HÀNG.xlsx';
  url?: string; //'S\\S\\Z\\D\\I\\210812-162653635-838698AF.tvc';
}

export interface IDocumentParams {
  start?: number; //0,
  limit?: number; //25,
  project?: string; //'', //id,
  docgroup?: string; //'P',
}

export interface IDataIntro {}
