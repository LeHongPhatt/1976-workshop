import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {UserSelectors} from 'store/user';
import * as UserActions from 'store/user';
import {API_ENDPOINT} from 'utils';

export const useUpload = () => {
  const dispatch = useDispatch();
  const loading = useSelector(UserSelectors.getLoading);
  const onUploadimage = useCallback(
    async (file: any, callback: (a: any) => void) => {
      const formData = new FormData();
      formData.append('file', {
        type: file.fileType,
        name: file.filename,
        uri: file.uri,
      });
      dispatch(
        UserActions.postBaseActionsRequest(
          {
            formData,
            endPoint: API_ENDPOINT.UTIL.UPLOAD,
            headers: {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            },
          },
          res => {
            if (res.code === 200) {
              callback(res.data);
            } else {
            }
          },
        ),
      );
    },
    [dispatch],
  );
  return {
    onUploadimage,
    loading,
  };
};
