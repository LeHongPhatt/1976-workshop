import {WrapperLayout} from 'components';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {dataContacts} from 'types';
import {styleSpacing} from 'utils';
import {ListItem} from '../component';
import {BaseStyle} from 'theme';
const Contact: React.FC = () => {
  return (
    <WrapperLayout
      header={{
        title: 'account.contact',
      }}>
      <ScrollView style={styles.container}>
        {dataContacts.map(({title, onPress, isViewTouch}, idx) => (
          <ListItem
            key={idx}
            title={title}
            isViewTouch={isViewTouch}
            onPress={() => onPress()}
            icon={<View />}
            edit={false}
            styleContainer={[BaseStyle.resetPading]}
            styleRight={[BaseStyle.resetMargin]}
          />
        ))}
      </ScrollView>
    </WrapperLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    ...styleSpacing('px-16'),
    ...styleSpacing('pt-12'),
  },
});
export default Contact;
