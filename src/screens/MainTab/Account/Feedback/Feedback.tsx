import {Images} from 'assets';
import {
  KeyboardScrollView,
  TextCus,
  TextInputs,
  WrapperLayout,
} from 'components';
import {useAccount} from 'hooks';
import React, {useCallback} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Colors} from 'theme';
import {callNumber} from 'utils';
interface IFormSendFeedBack {
  description: string;
}
const Feedback: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: {errors, isDirty, isValid},
  } = useForm<IFormSendFeedBack>({
    mode: 'onSubmit',
    defaultValues: {
      description: '',
    },
  });
  const {onHandleRequestDeleteAccount, loading} = useAccount();
  const onSendFeedback = useCallback(
    (value: IFormSendFeedBack) => {
      onHandleRequestDeleteAccount({
        ...value,
        type: 'feed_back',
      });
    },
    [onHandleRequestDeleteAccount],
  );
  return (
    <WrapperLayout
      isForForm
      header={{
        title: 'account.feedback',
      }}>
      <KeyboardScrollView
        textBtn="feedback"
        onPress={handleSubmit(onSendFeedback)}
        loading={loading}
        disabled={loading || (!isDirty && !isValid)}>
        <FastImage
          source={Images.logo1976}
          style={styles.logoImg}
          resizeMode="contain"
        />
        <TextCus mt-7>
          <TextCus bold orange>
            {'1976 The Coffee & Harley Davidson'}
          </TextCus>
          {
            ' sẽ hồi đáp góp ý khiếu nại của quý khách trong thời gian sớm nhất. Mọi yêu cầu cần xử lý gấp xin vui lòng liên hệ Hotline: '
          }
          <TextCus onPress={() => callNumber('0939319839')}>
            {'0939.319.839'}
          </TextCus>
          {' để được hỗ trợ.'}
        </TextCus>
        <Controller
          control={control}
          name="description"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInputs
              placeholder={'enter_feedback'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.description?.message as string}
              styleInputContent={[styles.content]}
              styleInput={[styles.input]}
              multiline={true}
              placeholderTextColor={Colors.color_84}
              textAlignVertical="top"
            />
          )}
        />
      </KeyboardScrollView>
    </WrapperLayout>
  );
};
const styles = StyleSheet.create({
  logoImg: {
    height: 50,
    marginTop: 32,
    marginBottom: 24,
  },
  content: {
    backgroundColor: Colors.bg_grey,
    borderWidth: 0,
    marginTop: 30,
  },
  input: {
    height: 150,
  },
});
export default Feedback;
