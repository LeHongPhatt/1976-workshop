import { StyleSheet } from 'react-native';
import { Colors } from 'theme';
// import {dimensions} from 'utils';
// const {width, height} = dimensions;
export default StyleSheet.create({
    flx: {
        flex: 1,
    },
    flexRow: {
        flexDirection: 'row',
    },
    alignCenter: {
        alignItems: 'center',
    },
    justCenter: {
        justifyContent: 'center',
    },
    justBetween: {
        justifyContent: 'space-between',
    },
    p16: {
        padding: 16,
    },
    pb8: {
        paddingBottom: 8,
    },
    p24: {
        padding: 24,
    },
    pH0: {
        paddingHorizontal: 0,
    },
    pH16: {
        paddingHorizontal: 16,
    },
    pH24: {
        paddingHorizontal: 24,
    },
    pV8: {
        paddingVertical: 8,
    },
    pV12: {
        paddingVertical: 12,
    },
    mb4: {
        marginBottom: 4,
    },
    mb8: {
        marginBottom: 8,
    },
    mb10: {
        marginBottom: 10,
    },
    mb12: {
        marginBottom: 12,
    },
    ml8: {
        marginLeft: 8,
    },
    mV12: {
        marginVertical: 12,
    },
    bgGrey: {
        backgroundColor: Colors.bg_grey,
    },
    // block
    changeLocationBtn: {
        backgroundColor: 'transparent',
        borderColor: Colors.main,
        borderWidth: 1,
        borderRadius: 66,
        width: 64,
        height: 22,
    },
    wrpImage: {
        width: 80,
        height: 80,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    brLeft: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    }
});
