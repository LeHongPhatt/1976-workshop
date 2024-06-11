import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import styles from './styles';
import AppIntroSlider from 'react-native-app-intro-slider';
import {NavigationService, Routes} from 'navigation';
import {slidesIntro} from 'utils';
import {useAuth, useKey} from 'hooks';
import {IconCus, TextCus} from 'components';
import {IconNames} from 'assets';
import {Colors} from 'theme';
import Icon from 'assets/svg/Icon';

const Intro = () => {
  const {saveKeyStore, getKeyStore} = useKey();
  const [checkintro, setcheckintro] = useState('');
  // const user = useSelector(userSelect);
  const {onShowIntroApp} = useAuth();
  useEffect(() => {
    _retrieveData();
  }, []);

  const _storeData = async () => {
    saveKeyStore('CHECKINTRO', 'Y');
  };

  const _retrieveData = async () => {
    // try {
    const valueTK = await getKeyStore('CHECKINTRO');
    valueTK && setcheckintro(valueTK);
    // } catch (error) {
    //   // Error retrieving data
    // }
  };

  const renderNextButton = () => {
    return (
      <View style={styles.nextButton}>
        <TextCus bold textAlign="center" py-10 useI18n mr-10>
          continue
        </TextCus>
        <Icon.ArrowRight />
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.nextButton}>
        <TouchableOpacity style={styles.buttonContainer} onPress={_onSkipClick}>
          <TextCus bold textAlign="center" useI18n py-10 mr-10>
            right_now
          </TextCus>
          <Icon.ArrowRight />
        </TouchableOpacity>
      </View>
    );
  };
  const _renderItem = ({item}: any) => {
    return (
      <ImageBackground style={styles.image} source={item.image}>
        {/* <View style={styles.slide}>
          <View style={styles.viewsct}>
            <TextCus style={styles.title}>{item.title}</TextCus>
            <TextCus style={styles.text}>{item.text}</TextCus>
          </View>
        </View> */}
      </ImageBackground>
    );
  };

  const _onDone = () => {
    onShowIntroApp();
  };

  const _onSkipClick = () => {
    onShowIntroApp();
    console.log('babab');
    NavigationService.replace(Routes.Login);
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slidesIntro}
      onDone={_onDone}
      dotStyle={styles.dot}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      showSkipButton={false}
      bottomButton={true}
    />
  );
};

export default Intro;
