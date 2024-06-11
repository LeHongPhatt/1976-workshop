import {StackScreenProps} from '@react-navigation/stack';
import {Routes} from 'navigation/Routes';
import {
  InputPasswordParams,
  ICartOrderParams,
} from 'navigation/NavigationParams';

export interface MainParamsList extends Record<string, object | undefined> {
  [Routes.InputPassword]: InputPasswordParams;
  [Routes.CartOrder]: ICartOrderParams;
}

export interface BaseNavigationProps<T extends keyof MainParamsList>
  extends StackScreenProps<MainParamsList, T> {}
