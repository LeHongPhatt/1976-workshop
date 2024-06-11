import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as AppActions from 'store/app';
import {AppSelectors} from 'store/app';

export const useModal = () => {
  const dispatch = useDispatch();
  const visible = useSelector(AppSelectors.getAttrByKey('visible'));
  const visibleFile = useSelector(AppSelectors.getAttrByKey('visibleFile'));
  const visiblePreview = useSelector(
    AppSelectors.getAttrByKey('visiblePreview'),
  );

  const toggleModalImage = useCallback(
    async (params: boolean) => {
      try {
        dispatch(AppActions.toggleModalImageViewer(params));
      } catch (error) {}
    },
    [dispatch],
  );

  const toggleModalFile = useCallback(
    async (params: boolean) => {
      try {
        dispatch(AppActions.toggleModalPdf(params));
      } catch (error) {}
    },
    [dispatch],
  );

  const toggleModalPreview = useCallback(
    async (params: boolean) => {
      try {
        dispatch(AppActions.toggleModalPreview(params));
      } catch (error) {}
    },
    [dispatch],
  );

  return {
    visible,
    visibleFile,
    visiblePreview,
    toggleModalImage,
    toggleModalFile,
    toggleModalPreview,
  };
};
