import {TextCus} from 'components';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import * as Progress from 'react-native-progress';

import {Colors} from 'theme';
import {IUser} from 'types';
import {dimensions} from 'utils';

const {width} = dimensions;
interface IProps extends IUser {}
const ProgressRank: React.FC<IProps> = ({
  total_point,
  point_to_get_next_rank,
  next_rank,
  rank,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Progress.Bar
          progress={total_point / point_to_get_next_rank}
          width={width - 80}
          height={2}
          color={Colors.white}
          borderWidth={0}
          unfilledColor={Colors.color_52}
        />
        {/* <FastImage
        source={ic_crown}
        style={{width: 20, height: 20, marginLeft: 8}}
      /> */}
      </View>
      <TextCus mt-10 subtitle bold>
        {point_to_get_next_rank === 0
          ? `Bạn đã đạt giới hạn ${rank}`
          : `Điểm cần để lên ${next_rank}: `}
        {point_to_get_next_rank === 0 ? null : (
          <TextCus>{point_to_get_next_rank}</TextCus>
        )}
      </TextCus>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default ProgressRank;
