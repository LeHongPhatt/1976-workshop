/**
 * @description get data from redux store when perform the member actions
 */
import {createSelector} from 'reselect';
import {IProjectDetailState} from 'types';

const selector = (state: {project: IProjectDetailState}) => state.project;

export const getError = createSelector(
  selector,
  ({error}: IProjectDetailState) => error,
);

export const getLoading = createSelector(
  selector,
  ({loading}: IProjectDetailState) => loading,
);

export const getImageList = createSelector(
  selector,
  ({imagesList}: IProjectDetailState) => imagesList || [],
);

export const getDesProject = createSelector(
  selector,
  ({detail}: IProjectDetailState) => detail || {},
);

export const getGroupProject = createSelector(
  selector,
  ({group}: IProjectDetailState) => group || [],
);

export const getGroupBDS = createSelector(
  selector,
  ({groupBDS}: IProjectDetailState) => groupBDS || [],
);

export const getStackingPlan = createSelector(
  selector,
  ({stackingPlan}: IProjectDetailState) => stackingPlan || [],
);

export const getTimeLine = createSelector(
  selector,
  ({timeLine}: IProjectDetailState) => timeLine || [],
);

export const getTimeLineImage = createSelector(
  selector,
  ({timeLineImage}: IProjectDetailState) => timeLineImage || [],
);
