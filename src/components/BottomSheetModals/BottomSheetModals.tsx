import React, {forwardRef, useCallback, useMemo} from 'react';
import {Portal} from '@gorhom/portal';
import BottomSheet, {
  useBottomSheetSpringConfigs,
  useBottomSheetModalInternal,
  BottomSheetBackdropProps,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import {Keyboard} from 'react-native';
import {StyleSheet} from 'react-native';
import {BackdropPressBehavior} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
interface IProps {
  children: React.ReactNode;
  pressBehavior?: BackdropPressBehavior;
  snapPoint?: Array<string | number>;
}
const BottomSheetModal = forwardRef<BottomSheet, IProps>(
  ({children, pressBehavior = 'collapse', snapPoint = ['35%']}, ref) => {
    const snapPoints = useMemo(() => snapPoint, [snapPoint]);

    const {containerHeight, containerOffset} = useBottomSheetModalInternal();
    const animationConfigs = useBottomSheetSpringConfigs({
      damping: 80,
      overshootClamping: true,
      restDisplacementThreshold: 0.1,
      restSpeedThreshold: 0.1,
      stiffness: 500,
    });
    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          onPress={Keyboard.dismiss}
          pressBehavior={pressBehavior}
        />
      ),
      [pressBehavior],
    );
    return (
      <Portal>
        <BottomSheet
          snapPoints={snapPoints}
          ref={ref}
          index={-1}
          animateOnMount
          animationConfigs={animationConfigs}
          handleIndicatorStyle={styles.hidden}
          containerHeight={containerHeight}
          containerOffset={containerOffset}
          handleStyle={styles.resetPadding}
          backdropComponent={renderBackdrop}>
          {children}
        </BottomSheet>
      </Portal>
    );
  },
);
const styles = StyleSheet.create({
  hidden: {
    display: 'none',
  },
  resetPadding: {
    padding: 0,
  },
});
export default BottomSheetModal;
