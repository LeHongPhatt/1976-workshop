import {IconNames} from 'assets';
import {Buttons, Flatlist, IconCus, WrapperLayout} from 'components';
import {useNotification} from 'hooks';
import React, {Fragment, useCallback, useEffect, useRef, useState} from 'react';
import {Colors} from 'theme';
import {INotificationItem} from 'types';
import {BottomSheetNoti, NotificationItem} from './component';
import {IRefBottomNoti} from './component/BottomSheetNoti';

const Notification: React.FC = () => {
  const refModal = useRef<IRefBottomNoti>(null);
  const [query, setQuery] = useState({
    page: 1,
    limit: 10,
  });
  const {getListNotification, loading, noties} = useNotification();
  useEffect(() => {
    getListNotification({...query});
  }, [getListNotification, query]);
  const renderItem = useCallback((item, idx) => {
    return <NotificationItem {...item} key={idx} />;
  }, []);
  const onPullDown = useCallback(() => {
    setQuery(prev => ({...prev, page: 1}));
  }, []);
  return (
    <WrapperLayout
      header={{
        title: 'noti.title',
        renderRight: () => (
          <Buttons onPress={() => refModal.current?.onShowModal()}>
            <IconCus name={IconNames.EDIT} color={Colors.white} size={20} />
          </Buttons>
        ),
      }}>
      <Fragment>
        <Flatlist
          data={noties}
          renderItem={({item, index}) => renderItem(item, index)}
          getItemType={(item: INotificationItem) => item.title}
          onPullDown={onPullDown}
        />
        <BottomSheetNoti ref={refModal} />
      </Fragment>
    </WrapperLayout>
  );
};
export default Notification;
