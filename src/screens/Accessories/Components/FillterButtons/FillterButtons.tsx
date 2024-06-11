import {Buttons, IconCus, TextCus} from 'components';
import React, {useState} from 'react';
import {View} from 'react-native';
import {getPaddingHorizontal} from 'utils';
import styles from 'screens/Accessories/styles';
import {Colors} from 'theme';

export default function FillterButtons() {
  const [selected, setSelected] = useState(null);
  const _onSelected = () => {
    if (selected === null) {
      setSelected('highToLow');
    } else if (selected === 'highToLow') {
      setSelected('lowToHigh');
    } else if (selected === 'lowToHigh') {
      setSelected(null);
    }
  };
  return (
    <View style={[getPaddingHorizontal(8), styles.rowItem]}>
      <Buttons style={styles.btn}>
        <TextCus subtitle>Giá bán</TextCus>
      </Buttons>
      <Buttons
        style={[styles.btn, selected !== null && styles.btnSelected]}
        onPress={() => _onSelected()}>
        <View style={[styles.rowItem, styles.alignCenter]}>
          <TextCus subtitle style={styles.mr4} orange={selected !== null}>
            Bán chạy
          </TextCus>
          <View style={styles.mt2}>
            {selected !== null && (
              <IconCus
                name={
                  (selected === 'highToLow' && 'chevron-down') ||
                  (selected === 'lowToHigh' && 'chevron-up')
                }
                size={12}
                color={selected !== null ? Colors.main : undefined}
              />
            )}
          </View>
        </View>
      </Buttons>
      <Buttons style={styles.btn}>
        <TextCus subtitle>Hàng mới về</TextCus>
      </Buttons>
      <Buttons style={styles.btn}>
        <TextCus subtitle>Nổi bật</TextCus>
      </Buttons>
    </View>
  );
}
