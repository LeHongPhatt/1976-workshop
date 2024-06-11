/**
 * @description get data from redux store when perform the member actions
 */
import {createSelector} from 'reselect';
import {ITicketState} from 'types';

const selector = (state: {ticket: ITicketState}) => state.ticket;

export const getError = createSelector(
  selector,
  ({error}: ITicketState) => error,
);

export const getLoading = createSelector(
  selector,
  ({loading}: ITicketState) => loading,
);

export const getDataTypeList = createSelector(
  selector,
  ({dataType}: ITicketState) => dataType || [],
);

export const getDataGroupList = createSelector(
  selector,
  ({dataGroup}: ITicketState) => dataGroup || [],
);

export const getCatDetailList = createSelector(
  selector,
  ({dataCat}: ITicketState) => dataCat || [],
);

export const getDataComList = createSelector(
  selector,
  ({dataCom}: ITicketState) => dataCom || [],
);

export const getSupportTicketList = createSelector(
  selector,
  ({dataSupport}: ITicketState) => dataSupport || [],
);

export const selectedItem = createSelector(
  selector,
  ({selectedTicket}: ITicketState) => selectedTicket || [],
);

export const toggleModaleComment = createSelector(
  selector,
  ({isOpen}: ITicketState) => isOpen || false,
);

export const getLoadingComment = createSelector(
  selector,
  ({loadingComment}: ITicketState) => loadingComment || false,
);

export const getAttachFile = createSelector(
  selector,
  ({attachFile}: ITicketState) => attachFile || [],
);

export const getHistoryTicket = createSelector(
  selector,
  ({histories}: ITicketState) => histories || [],
);
