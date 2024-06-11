import {LinearGradientCus, RenderHtml, TextCus, TouchCus} from 'components';
import React, {useCallback, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {BaseStyle, Colors} from 'theme';
interface IProps {
  content: string;
  title: string;
}
const linear = {
  start: {x: 1.2, y: -4},
  end: {x: 0.5, y: 6},
  locations: [0, 1],
  colors: ['#515159', '#252528'],
};
const Collapse: React.FC<IProps> = ({content, title}) => {
  const [showMore, setShowMore] = useState(false);
  const refView = useRef<View>(null);
  const onShowMore = useCallback(() => {
    setShowMore(!showMore);
  }, [showMore]);
  return (
    <>
      <View style={styles.content}>
        {title ? <TextCus heading5>{title}</TextCus> : null}
        <View ref={refView}>
          <RenderHtml content={showMore ? content : content?.slice(0, 100)} />
        </View>
        <TouchCus onPress={onShowMore} style={[styles.btnViewMore]}>
          <LinearGradientCus linear={linear} styleLinear={[styles.linear]}>
            <TextCus orange heading6 bold textAlign={'center'}>
              {showMore ? 'Rút gọn' : 'Xem thêm'}
            </TextCus>
          </LinearGradientCus>
        </TouchCus>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  btnViewMore: {
    marginTop: 10,

    ...BaseStyle.boxShadow,
    backgroundColor: Colors.black,
    borderRadius: 4,
  },
  linear: {
    paddingVertical: 2,
    ...BaseStyle.boxShadow,
    shadowColor: Colors.white,
    borderRadius: 4,
  },
});
export default Collapse;
