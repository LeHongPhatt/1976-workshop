import {TextCus, TouchCus} from 'components';
import React, {
  Ref,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useState,
} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {BaseStyle, Colors} from 'theme';
import {dimensions} from 'utils';

interface IProps {}

export interface IModalConfirmRef {
  onShow: ({...rest}: IModalState) => void;
  onClose: () => void;
}

let refGlobal: React.Ref<IModalConfirmRef> = null;

export const showAlertConfirm = ({...rest}: IModalState) => {
  if (refGlobal && 'current' in refGlobal && refGlobal.current) {
    refGlobal.current?.onShow({...rest});
  }
};
export const closeAlerConfirm = () => {
  if (refGlobal && 'current' in refGlobal && refGlobal.current) {
    refGlobal.current?.onClose();
  }
};
const {width} = dimensions;
interface IModalState {
  visible?: boolean;
  title: string;
  textCancel?: string;
  textOk?: string;
  onOk?: () => void;
  onCancel?: () => void;
}
const ModalConfirm = (props: IProps, ref: Ref<IModalConfirmRef>) => {
  const [state, setState] = useState<IModalState>({
    visible: false,
    title: '',
    textCancel: '',
    textOk: '',
  });
  useLayoutEffect(() => {
    refGlobal = ref;
  }, [ref]);

  useImperativeHandle(ref, () => {
    return {
      onShow,
      onClose,
    };
  });
  const onShow = useCallback(({...rest}: IModalState) => {
    setState({
      ...rest,
      visible: true,
    });
  }, []);

  const onClose = useCallback(() => {
    setState(prev => ({...prev, visible: false}));
  }, []);

  return (
    <Modal visible={state.visible} animationType="slide" transparent={true}>
      <View style={styles.container}>
        <View style={styles.wrapperContent}>
          <TextCus color={Colors.black} heading4 useI18n textAlign="center">
            {state.title ? state.title : 'action.delete_address'}
          </TextCus>
          <View style={[BaseStyle.flexSpacingBetween, styles.wrapperButton]}>
            <TouchCus
              onPress={onClose}
              style={[styles.button, styles.lineRight]}>
              <TextCus
                color={Colors.blue}
                regular
                useI18n
                heading4
                textAlign="center">
                {state.textCancel ? state.textCancel : 'action.cancel'}
              </TextCus>
            </TouchCus>
            <TouchCus onPress={() => state?.onOk?.()} style={styles.button}>
              <TextCus regular orange heading4 useI18n textAlign="center">
                {state.textOk ? state.textOk : 'action.delete'}
              </TextCus>
            </TouchCus>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default React.forwardRef(ModalConfirm);

const styles = StyleSheet.create({
  wrapperButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: Colors.disabled,
    borderTopWidth: 1,
    marginTop: 20,
  },
  button: {
    alignSelf: 'center',
    width: '50%',
    paddingVertical: 15,
  },
  textContent: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  textTitle: {
    alignSelf: 'center',
    marginTop: 24,
    fontSize: 19,
    marginBottom: 10,
  },
  wrapperContent: {
    maxHeight: 120,
    width: width - 100,
    borderRadius: 14,
    paddingTop: 20,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(242, 242, 242, 1)',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineRight: {
    borderRightWidth: 1,
    borderRightColor: Colors.disabled,
  },
});
