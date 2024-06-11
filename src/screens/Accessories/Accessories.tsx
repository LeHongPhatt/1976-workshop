import React from 'react';
import Icon from 'assets/svg/Icon';

import {HomeLayout, TextCus, TouchCus} from 'components';
import {TouchableWithoutFeedback, View} from 'react-native';
import {Colors} from 'theme';
import styles from './styles';
import ProductItem from './Components/ProductItem/ProductItem';
import {FlashList} from '@shopify/flash-list';
import {FillterButtons} from './Components/FillterButtons';
import {getHeight} from 'utils';
import {AccessoriesTabs} from './Components/AccessoriesTabs';
import {NavigationService, Routes} from 'navigation';

function Products() {
  return (
    <View style={[styles.bgContent, styles.pb175]}>
      <View style={getHeight(16)} />
      <FillterButtons />
      <View style={getHeight(16)} />
      <View style={styles.h100}>
        <FlashList
          data={[...Array(10)]}
          renderItem={({item}) => (
            <TouchableWithoutFeedback
              onPress={() => {
                NavigationService.navigate(Routes.ProductDetail);
              }}
              key={item}>
              <View>
                <ProductItem />
              </View>
            </TouchableWithoutFeedback>
          )}
          estimatedItemSize={200}
          numColumns={2}
        />
      </View>
    </View>
  );
}

export default function Accessories() {
  const tabs = [
    {name: 'Tất cả'},
    {name: 'Motorcycle Sound Systems & Speakers'},
    {name: 'Motorcycle Bags, Luggage & Racks'},
  ];
  return (
    <HomeLayout
      bgColor={Colors.main}
      statusBarMode={'dark-content'}
      header={{
        style: {
          paddingRight: 24,
          paddingVertical: 16,
          backgroundColor: Colors.main,
        },
        renderCenter: () => <TextCus heading4>Parts and accessories</TextCus>,
        renderRight: () => (
          <View style={styles.wrpHeaderRight}>
            <TouchCus onPress={() => {}} style={styles.iconSearch}>
              <Icon.Search />
            </TouchCus>
            <TouchCus onPress={() => {}}>
              <View style={styles.wrpIconCart}>
                <Icon.Cart />
                <View style={styles.badge}>
                  <TextCus subtitle>12</TextCus>
                </View>
              </View>
            </TouchCus>
          </View>
        ),
      }}>
      <View style={[styles.bgContent]}>
        <View style={[styles.px8, styles.py16, styles.h100]}>
          <AccessoriesTabs tabs={tabs} Component={Products} />
        </View>
      </View>
    </HomeLayout>
  );
}
