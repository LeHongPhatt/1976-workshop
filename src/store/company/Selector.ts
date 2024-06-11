/**
 * @description get data from redux store when perform the member actions
 */
import {createSelector} from 'reselect';
import {ICompanyState} from 'types';

const selector = (state: {company: ICompanyState}) => state.company;

export const getAttrByKey = (k: keyof ICompanyState) =>
  createSelector(selector, company => company[k]);
