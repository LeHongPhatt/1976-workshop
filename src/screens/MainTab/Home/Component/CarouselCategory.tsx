/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useMemo, useCallback} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';
import Swiper from 'react-native-swiper';
import {dimensions} from 'utils';
import {TextCus} from 'components';
import {Colors, FontWeight} from 'theme';

const SLIDER_WIDTH = 40;
const {width} = dimensions;
const AppCarousel = props => {
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState(0);

  const position = useDerivedValue(() => withTiming(index), [index]);

  const onCarouselPressed = React.useCallback(
    carousel => {
      props.onPress(carousel);
    },
    [props],
  );

  const getHeight = height => {
    setHeight(height + 12);
  };

  const chunk = useCallback((arr, len) => {
    const chunks = [];
    let i = 0;
    const n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, (i += len)));
    }
    return chunks;
  }, []);

  const splitData = useMemo(() => chunk(props.data, 8), [chunk, props]);
  const lengthItem = useMemo(() => splitData.length, [splitData.length]);
  const itemWidth = useMemo(
    () => (lengthItem > 0 ? SLIDER_WIDTH / lengthItem : 0),
    [lengthItem],
  );

  const onIndexChanged = useCallback(index => {
    setIndex(index);
  }, []);
  const renderCarousel = () => {
    return (
      <View style={{marginTop: 16}}>
        {lengthItem > 0 && (
          <Swiper
            scrollEventThrottle={16}
            pagingEnabled
            horizontal
            onIndexChanged={onIndexChanged}
            autoplay={false}
            loop={false}
            showsPagination={false}
            style={[
              {
                minHeight: 240,
                height: height,
              },
              props.customBoxStyle,
            ]}>
            {splitData.map((item, index) => {
              return (
                <View
                  onLayout={event => {
                    getHeight(event.nativeEvent.layout.height);
                  }}
                  key={`id_${index}`}
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent:
                      item?.length === 8 ? 'center' : 'flex-start',
                  }}>
                  {item?.map((itemCarousel, indexC) => {
                    return (
                      <TouchableOpacity
                        key={`id_${indexC}`}
                        onPress={() => onCarouselPressed(itemCarousel)}
                        style={[
                          {
                            alignItems: 'center',
                            width: width / 4,
                            height: 98,
                            marginBottom: indexC < 4 ? 6 : 0,
                          },
                          props.additionalStyle,
                        ]}>
                        <FastImage
                          source={{uri: itemCarousel.icon}}
                          style={[styles.iconStyle, props.styleIcon]}
                          resizeMode={FastImage.resizeMode.contain}
                        />
                        <TextCus
                          align="center"
                          style={styles.title}
                          numberOfLines={2}>
                          {itemCarousel.name}
                        </TextCus>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            })}
          </Swiper>
        )}
        {lengthItem > 1 ? <Slider /> : null}
      </View>
    );
  };

  const Slider = () => {
    return lengthItem > 1 ? (
      <View
        style={[styles.inActiveScrollContentStyle, props.inActiveScrollStyle]}>
        {splitData.map((_, index) => {
          const sliderStyle = useAnimatedStyle(() => ({
            transform: [
              {
                translateX: interpolate(
                  position.value,
                  [
                    index - 3,
                    index - 2,
                    index - 1,
                    index,
                    index + 1,
                    index + 2,
                    index + 3,
                  ],
                  [
                    (index - 3) * itemWidth,
                    (index - 2) * itemWidth,
                    (index - 1) * itemWidth,
                    index * itemWidth,
                    (index + 1) * itemWidth,
                    (index + 2) * itemWidth,
                    (index + 3) * itemWidth,
                  ],
                ),
              },
            ],
          }));
          return (
            index === 0 && (
              <Animated.View
                key={index}
                style={[
                  {
                    width: itemWidth,
                  },
                  styles.activeScrollStyle,
                  props.activeScrollStyle,
                  sliderStyle,
                ]}
              />
            )
          );
        })}
      </View>
    ) : lengthItem === 1 ? (
      <View style={[styles.inActiveScrollStyle, props.inActiveScrollStyle]} />
    ) : null;
  };

  return renderCarousel();
};
const styles = StyleSheet.create({
  iconStyle: {
    width: 58,
    height: 58,
  },
  title: {
    fontSize: 10,
    width: 72,
    textAlign: 'center',
    lineHeight: 14,
    marginTop: 6,
    fontWeight: FontWeight.bold,
  },
  inActiveScrollStyle: {
    alignSelf: 'center',
    height: 4,
    width: 0,
    borderRadius: 2,
    backgroundColor: Colors.main,
    marginTop: 16,
  },
  activeScrollStyle: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 2,
    height: 4,
    backgroundColor: Colors.main,
  },
  inActiveScrollContentStyle: {
    alignSelf: 'center',
    height: 4,
    width: SLIDER_WIDTH,
    borderRadius: 2,
    backgroundColor: Colors.main,
    marginTop: 16,
  },
});
export default React.memo(AppCarousel);
