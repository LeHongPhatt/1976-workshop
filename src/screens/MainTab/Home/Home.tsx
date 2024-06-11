import {useIsFocused} from '@react-navigation/native';
import {IconNames, Images} from 'assets';
import {Badge, Buttons, Carousel, ImageCus, WrapperLayout} from 'components';
import {useHome} from 'hooks';
import {NavigationService, Routes} from 'navigation';
import React, {useCallback, useEffect, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Colors} from 'theme';
import {ECategoryHome, ICategoryHome} from 'types';
import {dimensions} from 'utils';
import {CarouselCategory} from './Component';
import {Platform} from 'react-native';
const {width} = dimensions;
const Home = () => {
  const [pauseVolume, setPauseVolume] = useState(true);
  const {getListCategoryHome, categories, getListBannerHome, banners} =
    useHome();
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      getListCategoryHome();
      getListBannerHome();
    }
  }, [getListBannerHome, getListCategoryHome, isFocused]);

  const onPullDown = useCallback(() => {
    getListCategoryHome();
    getListBannerHome();
  }, [getListBannerHome, getListCategoryHome]);

  const onNavigationRouter = useCallback(({type, id, name}: ICategoryHome) => {
    switch (type) {
      case ECategoryHome.SELL_PRODUCT:
        return NavigationService.navigate(Routes.Category, {categoryId: id});
      case ECategoryHome.NEWS:
        return NavigationService.navigate(Routes.CategoryNews, {
          newsId: id,
          title: name,
        });
      case ECategoryHome.CHAT:
        return NavigationService.navigate(Routes.Support);
      case ECategoryHome.FEEDBACK:
        return NavigationService.navigate(Routes.Support);
      default:
        break;
    }
  }, []);
  return (
    <WrapperLayout
      isBgStatusBar
      header={{
        notGoBack: true,
        style: {
          backgroundColor: Colors.bg_main,
          borderTopWidth: 1,
          borderTopColor: Colors.main,
          paddingVertical: 20,
          marginBottom: 10,
        },
        renderCenter: () => (
          <View style={styles.imageLogo}>
            <FastImage source={Images.logo1976} style={styles.image} />
          </View>
        ),
        renderRight: () => (
          <Badge
            number={0}
            icon={IconNames.BELL}
            onPress={() => NavigationService.navigate(Routes.Notification)}
          />
        ),
        renderLeft: () => <View />,
      }}>
      <ScrollView
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onPullDown} />
        }>
        <View style={styles.body}>
          <Buttons
            style={styles.coverIcon}
            onPress={() => setPauseVolume(!pauseVolume)}
          />
          {banners?.length === 0 ? (
            <FastImage
              source={Images.bgHomePage}
              style={styles.imageBanner}
              resizeMode={FastImage.resizeMode.stretch}
            />
          ) : (
            <Carousel isPagiantion={false}>
              {(
                banners ?? [
                  {
                    image: Images.bgHomePage,
                  },
                ]
              )?.map((item, idx) => (
                <View key={idx}>
                  <ImageCus
                    source={{uri: item.image}}
                    style={styles.imageBanner}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                </View>
              ))}
            </Carousel>
          )}
        </View>
        <View style={styles.footer}>
          <CarouselCategory
            isMainCatergory={true}
            data={categories}
            activeScrollStyle={{
              backgroundColor: Colors.bg_main,
            }}
            onPress={onNavigationRouter}
            customBoxStyle={styles.customBoxStyle}
          />
        </View>
      </ScrollView>
    </WrapperLayout>
  );
};
const styles = StyleSheet.create({
  customBoxStyle: {
    minHeight: 200,
  },
  imageLogo: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 0 : 10,
  },
  image: {
    height: 48,
    width: 140,
  },
  icVolume: {
    height: 45,
  },
  coverIcon: {
    position: 'absolute',
    zIndex: 10,
    height: 40,
    width: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.46)',
    left: 20,
    top: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  body: {
    flex: 1.5,
    position: 'relative',
  },
  footer: {
    flex: 1,
    // backgroundColor: Colors.main,
    paddingVertical: 10,
  },
  dotNoti: {
    position: 'absolute',
    height: 8,
    width: 8,
    backgroundColor: Colors.main,
    borderRadius: 4,
    right: 0,
  },
  imageBanner: {
    height: '100%',
    // aspectRatio: 1,
    width: width,
  },
});
export default Home;
