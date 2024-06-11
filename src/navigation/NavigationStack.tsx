import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useCallback, useEffect, useState} from 'react';

import * as Screens from 'screens';

import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Icon from 'assets/svg/Icon';
import {Platform, View} from 'react-native';
import {Colors, FontWeight} from 'theme';
import {callNumber} from 'utils';
import {navigationRef} from './NavigationService';
import {Routes} from './Routes';
import {TabBarCus} from './component';
import {useAuth, useKey} from 'hooks';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: FontWeight.bold,
          color: Colors.white,
        },
        tabBarStyle: {
          ...Platform.select({
            ios: {
              paddingBottom: 20,
              height: 95,
            },
            android: {
              paddingBottom: 8,
              height: 85,
            },
          }),
          backgroundColor: Colors.bg_main,
          paddingHorizontal: 8,
        },
      })}>
      <Tab.Screen
        name={Routes.Home}
        component={Screens.Home}
        options={() => ({
          tabBarShowLabel: false,
          tabBarButton: (props: BottomTabBarButtonProps) => (
            <TabBarCus
              {...props}
              route="Home"
              IconName={<Icon.Home height={30} width={30} />}
            />
          ),
        })}
      />
      <Tab.Screen
        name={'CallContact'}
        component={() => <View />}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props: BottomTabBarButtonProps) => (
            <TabBarCus
              {...props}
              route="Contact"
              IconName={<Icon.CallPhone height={30} width={30} />}
              onPress={() => callNumber('0939319839')}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.News}
        component={Screens.News}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props: BottomTabBarButtonProps) => (
            <TabBarCus
              {...props}
              route="News"
              IconName={<Icon.News height={60} width={60} />}
              isCenter={false}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.BuySellExchange}
        component={Screens.BuySellExchange}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props: BottomTabBarButtonProps) => (
            <TabBarCus
              {...props}
              route="Buy-sell Exchange"
              IconName={<Icon.BuySell height={40} width={40} />}
              onPress={() => {}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Account}
        component={Screens.Account}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props: BottomTabBarButtonProps) => (
            <TabBarCus
              {...props}
              route="Biker Account"
              IconName={<Icon.Account height={40} width={40} />}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

/**
 * @description define stack navigator when the user has not been authenticated
 * @returns {any}
 */
interface IProps {
  token: string;
  isShowIntro: boolean;
}
const StackNavigator = ({token, isShowIntro}: IProps) => {
  console.log('isShowIntro StackNavigator', isShowIntro);
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={
        !isShowIntro ? Routes.Intro : token ? Routes.HomeTabs : Routes.Login
      }>
      <Stack.Screen name={Routes.Intro} component={Screens.Intro} />
      <Stack.Screen name={Routes.Login} component={Screens.Login} />
      <Stack.Screen name={Routes.OTP} component={Screens.OTP} />
      <Stack.Screen name={Routes.KYC} component={Screens.KYC} />
      <Stack.Screen name={Routes.Address} component={Screens.Address} />
      <Stack.Screen name={Routes.PickAddress} component={Screens.PickAddress} />
      <Stack.Screen
        name={Routes.InputPassword}
        component={Screens.InputPassword}
      />
      <Stack.Screen
        name={Routes.ResetPassword}
        component={Screens.ResetPassword}
      />
      <Stack.Screen name={Routes.Register} component={Screens.Register} />
      <Stack.Screen
        name={Routes.HomeTabs}
        component={HomeTabs}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen name={Routes.ResearchFn} component={Screens.ResearchFn} />
      <Stack.Screen name={Routes.Accessories} component={Screens.Accessories} />
      <Stack.Screen name={Routes.InfoAccount} component={Screens.InfoAccount} />
      <Stack.Screen name={Routes.BookAddress} component={Screens.BookAddress} />
      <Stack.Screen name={Routes.Branch} component={Screens.Branch} />
      <Stack.Screen name={Routes.Term} component={Screens.Term} />
      <Stack.Screen name={Routes.Policy} component={Screens.Policy} />
      <Stack.Screen name={Routes.Contact} component={Screens.Contact} />
      <Stack.Screen
        name={Routes.CategoryNews}
        component={Screens.CategoryNews}
      />
      <Stack.Screen name={Routes.DetailNews} component={Screens.DetailNews} />
      <Stack.Screen name={Routes.Cart} component={Screens.Cart} />
      <Stack.Screen name={Routes.CartOrder} component={Screens.CartOrder} />
      <Stack.Screen name={Routes.Search} component={Screens.Search} />
      <Stack.Screen
        name={Routes.SearchResult}
        component={Screens.SearchResult}
      />
      <Stack.Screen name={Routes.Category} component={Screens.Category} />
      <Stack.Screen name={Routes.Product} component={Screens.Product} />
      <Stack.Screen
        name={Routes.Notification}
        component={Screens.Notification}
      />
      <Stack.Screen
        name={Routes.HistoryOrderDetail}
        component={Screens.HistoryOrderDetail}
      />
      <Stack.Screen
        name={Routes.DetailAddress}
        component={Screens.DetailAddress}
      />
      <Stack.Screen
        name={Routes.HistoryOrders}
        component={Screens.HistoryOrders}
      />
      <Stack.Screen name={Routes.OrderPart} component={Screens.OrderPart} />
      <Stack.Screen name={Routes.Feedback} component={Screens.Feedback} />
      <Stack.Screen name={Routes.Support} component={Screens.Support} />

      <Stack.Screen
        name={Routes.ChangePassword}
        component={Screens.ChangePassword}
      />
      <Stack.Screen
        name={Routes.RequestDelete}
        component={Screens.RequestDelete}
      />
    </Stack.Navigator>
  );
};
/**
 * @description define stack navigator when the user has authenticated
 * @returns {any}
 */
// const AuthNavigator = () => (
//   <Stack.Navigator
//     initialRouteName={Routes.Home}
//     screenOptions={{headerShown: false}}>
//     <Stack.Screen name={Routes.Home} component={Screens.Home} />
//   </Stack.Navigator>
// );

/**
 * @description define the navigator container check whether the user is authenticated or not
 * @returns {any}
 */
export const Navigator = () => {
  const {token, isShowIntro} = useAuth();
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <StackNavigator
          token={token as string}
          isShowIntro={isShowIntro as boolean}
        />
      </NavigationContainer>
    </>
  );
};
