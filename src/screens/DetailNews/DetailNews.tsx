import {RouteProp, useRoute} from '@react-navigation/native';
import {RenderHtml, TextCus, WrapperLayout} from 'components';
import {useNews} from 'hooks';
import moment from 'moment';
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Colors} from 'theme';
import {RootStackParamList} from 'types';

const DetailNews: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'DetailNews'>>();
  const {getDetailNews, detailNews} = useNews();
  useEffect(() => {
    if (!route.params.newsId) return;
    getDetailNews({news_id: +route.params.newsId});
  }, [getDetailNews, route.params.newsId]);

  return (
    <WrapperLayout
      header={{
        title: 'detail',
      }}>
      <>
        <ScrollView
          style={styles.scrollViewContainer}
          contentContainerStyle={{paddingVertical: 16}}>
          <TextCus style={styles.title}>{detailNews?.title}</TextCus>
          <View style={styles.seenContainer}>
            {/* <FastImage style={styles.icRead} source={icPostDate} /> */}
            <TextCus style={styles.itemDate}>
              {moment(detailNews?.created_at).format('DD/MM/YYYY') || ''}
            </TextCus>
          </View>
          <RenderHtml content={detailNews?.content || ''} />
        </ScrollView>
        {detailNews?.link ? (
          <View style={styles.buttonContainer}>
            {/* <Buttons
            onPress={() => handleLinking(detailNews?.link)}
            style={{borderRadius: 12}}>
            <TextCus>Xem chi tiết</TextCus>
          </Buttons> */}
          </View>
        ) : null}
      </>
    </WrapperLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg_main,
  },
  scrollViewContainer: {flex: 1, paddingHorizontal: 16},
  title: {
    fontSize: 16,
    color: Colors.white,
  },
  icRead: {width: 16, height: 16},
  seenContainer: {flexDirection: 'row', marginTop: 8},
  itemDate: {
    fontSize: 12,
    color: Colors.disabled,
    marginLeft: 8,
  },
  content: {
    fontSize: 14,
    color: Colors.color_33,
    marginVertical: 8,
    lineHeight: 22,
  },
  // image: {width: DEVICE.WIDTH - 32, height: 200},
  buttonContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20,
  },
});
export default DetailNews;
