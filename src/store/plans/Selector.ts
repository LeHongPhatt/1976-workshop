/**
 * @description get data from redux store when perform the member actions
 */
import {createSelector} from 'reselect';
import {IPlanState} from 'types';

const selector = (state: {plans: IPlanState}) => state.plans;

export const getError = createSelector(
  selector,
  ({error}: IPlanState) => error,
);

export const getLoading = createSelector(
  selector,
  ({loading}: IPlanState) => loading || false,
);

export const getPlanDetail = createSelector(
  selector,
  ({planDetail}: IPlanState) => planDetail || [],
);

export const getImageList = createSelector(
  selector,
  ({imageList}: IPlanState) => imageList || [],
);

export const getListProject = createSelector(
  selector,
  ({listProject}: IPlanState) => listProject || [],
);

export const getListBlock = createSelector(
  selector,
  ({listBlock}: IPlanState) => listBlock || [],
);

export const getListWing = createSelector(
  selector,
  ({listWing}: IPlanState) => listWing || [],
);

export const getListFloor = createSelector(
  selector,
  ({listFloor}: IPlanState) => listFloor || [],
);

export const getColorData = createSelector(
  selector,
  ({colorData}: IPlanState) => colorData || [],
);

export const getStackingData = createSelector(
  selector,
  ({stackingPlan}: IPlanState) => stackingPlan || [],
);
