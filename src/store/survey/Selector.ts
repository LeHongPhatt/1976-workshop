/**
 * @description get data from redux store when perform the member actions
 */
import {createSelector} from 'reselect';
import {ISurveyState} from 'types';

const selector = (state: {survey: ISurveyState}) => state.survey;

export const getError = createSelector(
  selector,
  ({error}: ISurveyState) => error,
);

export const getLoading = createSelector(
  selector,
  ({loading}: ISurveyState) => loading,
);

export const getListSurvey = createSelector(
  selector,
  ({listSurvey}: ISurveyState) => listSurvey || [],
);

export const getQuestionSurvey = createSelector(
  selector,
  ({questionSurvey}: ISurveyState) => questionSurvey || [],
);

export const getAnswerSurvey = createSelector(
  selector,
  ({answerSurvey}: ISurveyState) => answerSurvey || [],
);
