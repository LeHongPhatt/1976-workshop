import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from 'screens/Accessories/styles';

const Tab = createMaterialTopTabNavigator();

export interface IAccessoriesTabs {
  tabs?: any;
  Component?: any;
}

export default function AccessoriesTabs(props: IAccessoriesTabs) {
  const {tabs, Component} = props;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: {width: 'auto'},
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        tabBarScrollEnabled: true,
        tabBarStyle: styles.bgContent,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      }}>
      {tabs.map(item => (
        <Tab.Screen key={item.name} name={item.name} component={Component} />
      ))}
    </Tab.Navigator>
  );
}
