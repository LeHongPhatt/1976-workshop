import {FlashList, FlashListProps} from '@shopify/flash-list';
import {Images} from 'assets';
import {TextCus} from 'components';
import React, {forwardRef, useCallback} from 'react';
import {RefreshControl, SafeAreaView, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ActivityIndicator} from 'react-native-paper';
import {Colors} from 'theme';
interface IProps {
  data: any[];
  renderItem: (data) => React.ReactElement;
  onPullDown?: () => void;
  onLoadMore?: () => void;
  content?: string;
  loading?: boolean;
}
const FlatList = forwardRef<any, IProps & FlashListProps<any>>(
  (
    {data, renderItem, onPullDown, onLoadMore, content, loading, ...rest},
    ref,
  ) => {
    const keyExtractor = (item, idx) => {
      return idx?.toString();
    };
    const ListEmptyComponent = useCallback(() => {
      if (loading) {
        return <ActivityIndicator animating={true} color={Colors.white} />;
      }
      return (
        <View style={styles.content}>
          <FastImage
            resizeMode="contain"
            source={Images.empty}
            style={styles.empty}
          />
          <TextCus mt-24>{content ?? 'Không có dữ liệu'}</TextCus>
        </View>
      );
    }, [content, loading]);
    const ListFooterComponent = useCallback(() => {
      return <View style={{height: 30}} />;
    }, []);
    return (
      <SafeAreaView style={{flex: 1}}>
        <FlashList
          ref={ref}
          data={data}
          extraData={{}}
          renderItem={renderItem}
          estimatedItemSize={40}
          keyExtractor={keyExtractor}
          refreshControl={
            <RefreshControl
              removeClippedSubviews={true}
              title={'Thả để làm mới'}
              refreshing={false}
              onRefresh={onPullDown}
              titleColor={Colors.white}
              tintColor={Colors.white}
            />
          }
          onEndReachedThreshold={0.4}
          scrollEventThrottle={300}
          onEndReached={onLoadMore}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={ListEmptyComponent}
          ListFooterComponent={ListFooterComponent}
          disableAutoLayout={true}
          {...rest}
        />
      </SafeAreaView>
    );
  },
);
const styles = StyleSheet.create({
  empty: {
    width: 250,
    height: 190,
  },
  content: {
    alignItems: 'center',
    marginTop: 32,
  },
});
export default FlatList;
