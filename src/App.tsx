// import Toast from 'react-native-toast-message';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {SafeAreaStatusBar, ModalConfirm} from 'components';
import BottomSheetAlert from 'components/BottomSheet/BottomSheet';
import i18n from 'i18n';
import {Navigator} from 'navigation';
import React, {Suspense, useRef} from 'react';
import {I18nextProvider} from 'react-i18next';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {configStore} from 'store/createStore';
// import * as AppActions from 'store/app';
import Codepush from 'react-native-code-push';

const {persistor, store} = configStore();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};
const App = () => {
  const modalConfirmRef = useRef(null);
  return (
    <SafeAreaProvider>
      <SafeAreaStatusBar backgroundColor="transparent" />
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <I18nextProvider i18n={i18n}>
            <Suspense fallback={null}>
              <BottomSheetModalProvider>
                <PersistGate loading={null} persistor={persistor}>
                  <Navigator />
                  <Toast />
                  <BottomSheetAlert />
                  <ModalConfirm ref={modalConfirmRef} />
                </PersistGate>
              </BottomSheetModalProvider>
            </Suspense>
          </I18nextProvider>
        </PaperProvider>
      </Provider>
    </SafeAreaProvider>
  );
};
const codePushOption = {
  checkFrequency: Codepush.CheckFrequency.ON_APP_RESUME,
  installMode: Codepush.InstallMode.ON_NEXT_RESUME,
};
export default Codepush(codePushOption)(App);
// export default App;
