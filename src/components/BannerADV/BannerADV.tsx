import ImageDefaultHeader from 'components/ImageViewer/DefaultHeader';
import {TextCus} from 'components/TextCus';
import {useHome} from 'hooks';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Modal, Portal, Provider} from 'react-native-paper';
import {Colors} from 'theme';
import {IBannerADV, IBannerADVItem} from 'types';
import {height, randomItem, width} from 'utils/libs';
import dummyData from './dummyData';

export function BannerADV(props: IBannerADV) {
  const {visibleBanner, toggleBanner} = useHome();
  const {data = dummyData, children} = props;
  const [banner, setBanner] = useState<IBannerADVItem>();

  useEffect(() => {
    const randomADV = async () => {
      let result = await randomItem(data);
      if (result) {
        setBanner(result);
      }
    };

    randomADV();
  }, []);

  return (
    <Provider>
      <Portal>
        <Modal
          theme={{
            colors: {
              backdrop: 'transparent',
            },
          }}
          visible={visibleBanner}
          onDismiss={() => toggleBanner(false)}
          contentContainerStyle={[styles.containerStyle]}>
          <View style={styles.closeBtn}>
            <ImageDefaultHeader onRequestClose={() => toggleBanner(false)} />
          </View>

          <View style={styles.pt10}>
            <TextCus bold>{banner?.title}</TextCus>
            <TextCus semibold>{banner?.content}</TextCus>
            <TextCus semibold>{banner?.detail}</TextCus>
          </View>
        </Modal>
      </Portal>
      {children}
    </Provider>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: Colors.bgAdv,
    borderRadius: 5,
    height: height * 0.2,
    width: width * 0.8,
    alignSelf: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  rowItem: {
    flexDirection: 'row',
  },
  closeBtn: {
    top: 0,
    right: 0,
    position: 'absolute',
  },
  pt10: {
    paddingTop: 10,
  },
});
