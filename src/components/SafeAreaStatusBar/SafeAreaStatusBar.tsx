import React, {useEffect, useState} from 'react';
import {StatusBar, StatusBarStyle} from 'react-native';

const SafeAreaStatusBar = ({
  backgroundColor,
  modeContent,
}: ISafeAreaStatusBar) => {
  const [mode, setMode] = useState<StatusBarStyle>(
    modeContent ?? 'light-content',
  );

  useEffect(() => modeContent && setMode(modeContent), [modeContent]);

  return <StatusBar barStyle={mode} />;
};

export interface ISafeAreaStatusBar {
  backgroundColor?: string;
  modeContent?: StatusBarStyle;
}

export default SafeAreaStatusBar;
