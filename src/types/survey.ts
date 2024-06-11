export interface ISurveyItem {
  surveyid: string; // 'SUR00017';
  custid: string; // 'C0000033';
  questionid: string; // '210927-153836584-243A6CF0';
  answerid: string; // '210927-153842673-D1D41B4C';
  answer: string; // 'Xin chào';
  scores: number;
  other: string; // 'N';
}
export interface IAnswerItem {
  answer: string;
  answerid: string;
  other: string;
  questionid: string;
  scores: number;
  surveyid: string;
}
