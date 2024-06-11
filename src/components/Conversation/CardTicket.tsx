import {TextCus} from 'components/TextCus';
import React, {useCallback} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {EAction, IItemTicket} from 'types';
import {TouchCus} from 'components/TouchCus';
import Emotions from 'assets/svg/Emotions';
import {emotionsDefault} from 'utils';
import {ImageCus} from 'components';
import {Images} from 'assets';

export function CardTicket(props: ICardTicket) {
  const {ticket, showAction = true, style} = props;

  const renderEmotion = () => {
    return (
      <View style={styles.row}>
        {emotionsDefault.map(e => (
          <View style={styles.ml4} key={e}>
            {Emotions?.[`${e}`]({}) ?? null}
          </View>
        ))}
      </View>
    );
  };
  const renderCard = useCallback(
    () => (
      <View
        style={[
          styles.wrapCardInfo,
          styles.wrapMaxTicket,
          styles.wrapShadow,
          styles.radius8,
          style,
        ]}>
        <View style={[styles.padTitle, styles.spaceItem, styles.row]}>
          <View>
            {ticket?.name && (
              <TextCus mainLightColor body2 medium>
                {ticket?.name}
              </TextCus>
            )}
          </View>
          <View>
            {ticket?.status && (
              <View
                style={[
                  styles.btnStatus,
                  styles.radius37,
                  ticket?.status === EAction.RECEVIED
                    ? styles.recevied
                    : styles.pending,
                ]}>
                <TextCus whiteColor label2 medium useI18n>
                  {ticket?.status}
                </TextCus>
              </View>
            )}
          </View>
        </View>
        <View style={[styles.row, styles.spaceItem, styles.padItemContent]}>
          <TextCus body2 medium useI18n>
            route
          </TextCus>
          <View style={styles.w50}>
            <TextCus textAlign={'right'} body2>
              {ticket?.route}
            </TextCus>
          </View>
        </View>
        <View style={[styles.row, styles.spaceItem, styles.padItemContent]}>
          <TextCus body2 medium useI18n>
            pay_method
          </TextCus>
          <TextCus body2>{ticket?.pay_method}</TextCus>
        </View>
        <View style={[styles.row, styles.spaceItem, styles.padItemContent]}>
          <TextCus body2 medium useI18n>
            amount
          </TextCus>
          <TextCus body2>{ticket?.amount}</TextCus>
        </View>
        <View style={[styles.row, styles.spaceItem, styles.padContent]}>
          <TextCus body2 medium useI18n>
            discount
          </TextCus>
          <TextCus body2>{ticket?.discount}</TextCus>
        </View>
        {showAction && (
          <View style={[styles.row, styles.spaceItem, styles.padContent]}>
            <TouchCus
              style={[
                styles.btnRecevie,
                styles.btnAction,
                styles.radius4,
                styles.cenItemvh,
              ]}
              onPress={() => {}}>
              <TextCus whiteColor body2 medium useI18n>
                recevie_now
              </TextCus>
            </TouchCus>
            <TouchCus
              style={[
                styles.pending,
                styles.btnAction,
                styles.radius4,
                styles.cenItemvh,
              ]}
              onPress={() => {}}>
              <TextCus whiteColor body2 medium useI18n>
                chat
              </TextCus>
            </TouchCus>
          </View>
        )}
        {ticket?.time && (
          <View style={[styles.row, styles.spaceItem, styles.padContent]}>
            <TextCus body2>{ticket?.time}</TextCus>
          </View>
        )}
      </View>
    ),
    [],
  );

  return (
    <>
      <View style={styles.row}>
        <ImageCus
          source={Images.flash_01}
          style={[styles.wrapImg, styles.mt12, styles.mr8]}
        />
        {renderCard()}
      </View>
      <View style={styles.wrapEmotion}>
        <View style={styles.row}>
          <View style={[styles.row, styles.wrapGroupEmo, styles.radius37]}>
            {renderEmotion()}
            <TextCus style={styles.ml4}>12</TextCus>
          </View>
          <TouchCus style={styles.ml8} onPress={() => {}}>
            <Emotions.Like />
          </TouchCus>
        </View>
      </View>
    </>
  );
}

export interface ICardTicket {
  style?: any;
  ticket: IItemTicket;
  showAction?: boolean;
}
