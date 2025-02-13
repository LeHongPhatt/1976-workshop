import React from 'react';
import {StyleSheet} from 'react-native';
import {TextCus} from 'components';
import {View} from 'react-native';
interface Props {
  title: string;
  sectionDescription?: string;
}
const SectionTilte: React.FC<Props> = ({title, sectionDescription}) => {
  return (
    <View key={title} style={styles.container}>
      <TextCus bold heading6>
        {title}
      </TextCus>
      {sectionDescription ? (
        <TextCus subtitle>{sectionDescription}</TextCus>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '30%',
  },
});
export default SectionTilte;
