export interface INewsParams {
  category_id?: number;
  limit: number;
  page: number;
}
export interface IDetailNewsParams {
  news_id: number;
}

export interface INewsState {
  loading: boolean;
  error: string | null;
  language: string;
  listAllNews?: any[];
  detailNews?: any;
  listCategoryNews?: any[];
}

export interface INews {
  category_id: number;
  content: string;
  created_at: Date;
  id: string;
  link: string;
  thumbnail: string;
  title: string;
}
