/**
 * @description get data from redux store when perform the member actions
 */
import {createSelector} from 'reselect';
import {IContractState} from 'types';

const selector = (state: {contract: IContractState}) => state.contract;

export const getError = createSelector(
  selector,
  ({error}: IContractState) => error,
);

export const getLoading = createSelector(
  selector,
  ({loading}: IContractState) => loading,
);

export const getContract = createSelector(
  selector,
  ({listContract}: IContractState) => listContract || [],
);

export const getReservation = createSelector(
  selector,
  ({listReservation}: IContractState) => listReservation || [],
);

export const getPaymentContract = createSelector(
  selector,
  ({payments}: IContractState) => payments || [],
);

export const getPaymentHistories = createSelector(
  selector,
  ({paymentHistories}: IContractState) => paymentHistories || [],
);

export const getGiftDiscount = createSelector(
  selector,
  ({gifts}: IContractState) => gifts || [],
);

export const getAttachedFile = createSelector(
  selector,
  ({attachedFile}: IContractState) => attachedFile || [],
);

export const getAllMember = createSelector(
  selector,
  ({allMembers}: IContractState) => allMembers || [],
);
