import {NavigationService} from 'navigation';
import {IAddresses} from './../types/user';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddressSelectors} from 'store/address';
import * as AddressActions from 'store/address';
import {API_ENDPOINT} from 'utils';
import {IAddressParams, IAddressResult, IUpdateAddressParams} from 'types';
import {useAuth} from './useAuth';
interface IParams {
  city_id: string;
  district_id: string;
}
export const useAddress = () => {
  const {getInfoUser} = useAuth();
  const dispatch = useDispatch();
  const loading = useSelector(AddressSelectors.getLoading);
  const cities = useSelector(
    AddressSelectors.getAttrByKey('city'),
  ) as IAddressResult[];
  const districts = useSelector(
    AddressSelectors.getAttrByKey('district'),
  ) as IAddressResult[];
  const wards = useSelector(
    AddressSelectors.getAttrByKey('ward'),
  ) as IAddressResult[];
  const addresses = useSelector(
    AddressSelectors.getAttrByKey('addresses'),
  ) as IAddresses[];
  const getListCity = useCallback(async () => {
    try {
      dispatch(
        AddressActions.getBaseActionsRequest({
          dataKey: 'city',
          formData: undefined,
          endPoint: API_ENDPOINT.UTIL.CADASTRAL,
        }),
      );
    } catch (error) {}
  }, [dispatch]);
  const getListDistrict = useCallback(
    ({city_id}: Pick<IParams, 'city_id'>) => {
      try {
        dispatch(
          AddressActions.getBaseActionsRequest({
            dataKey: 'district',
            formData: undefined,
            endPoint: `${API_ENDPOINT.UTIL.CADASTRAL}?city_id=${city_id}`,
          }),
        );
      } catch (error) {}
    },
    [dispatch],
  );
  const getListWard = useCallback(
    ({district_id}: Pick<IParams, 'district_id'>) => {
      try {
        dispatch(
          AddressActions.getBaseActionsRequest({
            dataKey: 'ward',
            formData: undefined,
            endPoint: `${API_ENDPOINT.UTIL.CADASTRAL}?district_id=${district_id}`,
          }),
        );
      } catch (error) {}
    },
    [dispatch],
  );

  const getListAddress = useCallback(() => {
    dispatch(
      AddressActions.getBaseActionsRequest({
        dataKey: 'addresses',
        endPoint: API_ENDPOINT.USER.ADDRESS,
      }),
    );
  }, [dispatch]);

  const onUpdateAdress = useCallback(
    ({addressId, ...rest}: IUpdateAddressParams) => {
      dispatch(
        AddressActions.patchBaseActionsRequest(
          {
            formData: {...rest},
            endPoint: `${API_ENDPOINT.USER.ADDRESS}/${addressId}`,
          },
          res => {
            if (res.code === 200) {
              getListAddress();
              getInfoUser();
              NavigationService.goBack();
            }
          },
        ),
      );
    },
    [dispatch, getListAddress, getInfoUser],
  );

  const onCreateAddress = useCallback(
    ({...rest}: IAddressParams) => {
      dispatch(
        AddressActions.postBaseActionsRequest(
          {
            formData: {...rest},
            endPoint: API_ENDPOINT.USER.ADDRESS,
          },
          res => {
            if (res.code === 201) {
              getListAddress();
              getInfoUser();
              NavigationService.goBack();
            }
          },
        ),
      );
    },
    [dispatch, getListAddress, getInfoUser],
  );

  const onDeleteAddress = useCallback(
    ({addressId}: {addressId: number}, callback: () => void) => {
      dispatch(
        AddressActions.deleteBaseActionsRequest(
          {
            endPoint: `${API_ENDPOINT.USER.ADDRESS}/${addressId}`,
          },
          res => {
            if (res.code === 200) {
              getListAddress();
              getInfoUser();
              callback?.();
            }
          },
        ),
      );
    },
    [dispatch, getListAddress, getInfoUser],
  );

  return {
    loading,
    cities,
    districts,
    wards,
    addresses,
    getListCity,
    getListDistrict,
    getListWard,
    onCreateAddress,
    getListAddress,
    onUpdateAdress,
    onDeleteAddress,
  };
};
