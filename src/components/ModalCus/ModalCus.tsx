import SvgIconNew from 'assets/IconSVG';
import {Header} from 'components';
import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import {Colors} from 'theme';
import {height, width} from 'utils/libs';

export function ModalCus(props: IModalProps) {
  const {visible, children, showTitle, title, hideModal, style, ...rest} =
    props;
  return visible ? (
    <Portal>
      <Modal visible={visible} onDismiss={() => hideModal()} {...rest}>
        <View style={[styles.containerModal, style]}>
          {showTitle && (
            <Header
              title={title}
              renderLeft={() => <SvgIconNew.ArrowLeft />}
              onPressLeft={() => hideModal()}
            />
          )}
          {children}
        </View>
      </Modal>
    </Portal>
  ) : null;
}

const styles = StyleSheet.create({
  container: {height: height - 60},
  containerModal: {
    width,
    height: height + 29,
    backgroundColor: Colors.white,
  },
});

export interface IModalProps {
  style?: any;
  title?: string;
  children: ReactNode;
  hideModal: () => void;
  visible: boolean;
  showTitle?: boolean;
}
