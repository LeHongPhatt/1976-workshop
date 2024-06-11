/**
 * @description get data from redux store when perform the member actions
 */
import {createSelector} from 'reselect';
import {IDocumentsState} from 'types';

const selector = (state: {document: IDocumentsState}) => state.document;

export const getAttrByKey = (k: keyof IDocumentsState) =>
  createSelector(selector, document => document[k]);

export const getError = createSelector(
  selector,
  ({error}: IDocumentsState) => error,
);

export const getLoading = createSelector(
  selector,
  ({loading}: IDocumentsState) => loading || false,
);

export const getDocuments = createSelector(
  selector,
  ({documents}: IDocumentsState) => documents || [],
);

export const getImageList = createSelector(
  selector,
  ({imageList}: IDocumentsState) => imageList || [],
);
