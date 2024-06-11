import React from 'react';
import {StyleSheet, View} from 'react-native';
import VariantItem from './VariantItem';
import {TextCus} from 'components';
import {Colors} from 'theme';
interface IProps {
  variants: any;
  title: string;
  name: string;
  onChooseVariant: (value: any) => void;
  selected: string;
}
const VariantList: React.FC<IProps> = ({
  variants,
  title,
  name,
  onChooseVariant,
  selected,
}) => {
  return (
    <View style={styles.propertyBody}>
      <TextCus subtitle style={{color: Colors.color_84}} mb-12 ml-6>
        {title}
        <TextCus subtitle>: {name}</TextCus>
      </TextCus>
      {variants?.length > 0 ? (
        <View style={styles.flexRow}>
          {variants
            ?.filter(item => item.active)
            ?.map((variant, index) => {
              return (
                <VariantItem
                  variant={variant}
                  onPress={() => onChooseVariant(variant)}
                  key={index}
                  isChoose={selected === variant?.name}
                />
              );
            })}
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  propertyBody: {
    paddingHorizontal: 8,
    marginTop: 24,
  },
  flexRow: {
    flexDirection: 'row',
  },
});
export default VariantList;
