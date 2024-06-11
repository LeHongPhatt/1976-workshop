import {TextCus} from 'components/TextCus';
import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {Colors} from 'theme';
interface IProps {
  children: React.ReactNode;
  isPagiantion?: boolean;
}
const Carousel: React.FC<IProps> = ({children, isPagiantion}) => {
  const renderPagination = useCallback((index, total) => {
    return (
      <View style={styles.dots}>
        <TextCus heading6 bold style={{color: Colors.color_33}}>
          {index + 1}/{total}
        </TextCus>
      </View>
    );
  }, []);
  return (
    <Swiper
      style={styles.wrapper}
      autoplay
      dot={false}
      autoplayTimeout={5}
      showsPagination={isPagiantion}
      renderPagination={renderPagination}>
      {children}
    </Swiper>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    height: 375,
  },
  dots: {
    position: 'absolute',
    right: 14,
    top: 14,
    paddingHorizontal: 16,
    paddingVertical: 2,
    backgroundColor: Colors.white,
    borderRadius: 4,
  },
});
export default Carousel;
