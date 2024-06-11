import {createReducer} from 'reduxsauce';
import {IDocumentsState} from 'types';
import {DocumentsTypes} from './Actions';

const INITIAL_STATE: IDocumentsState = {
  loading: false,
  error: null,
  documents: [],
  imageList: [],
  dataIntro: [],
  pubDocFile: {},
};

const appRequest = (state: IDocumentsState) => ({
  ...state,
  error: null,
  loading: true,
});

const getDocumentSuccess = (state: IDocumentsState, {payload}: any) => ({
  ...state,
  error: null,
  documents: payload,
  loading: false,
});

const getImageListSuccess = (state: IDocumentsState, {payload}: any) => ({
  ...state,
  error: null,
  imageList: payload,
  loading: false,
});

const getDataIntroSuccess = (state: IDocumentsState, {payload}: any) => ({
  ...state,
  error: null,
  dataIntro: payload,
  loading: false,
});

const getPubDocFileSuccess = (state: IDocumentsState, {payload}: any) => ({
  ...state,
  error: null,
  pubDocFile: payload,
  loading: false,
});

const appFailure = (state = INITIAL_STATE, {error}: any) => ({
  ...state,
  error,
  loading: false,
});

const HANDLERS = {
  [DocumentsTypes.GET_DOCUMENT_REQUEST]: appRequest,
  [DocumentsTypes.GET_DOCUMENT_SUCCESS]: getDocumentSuccess,
  [DocumentsTypes.GET_DOCUMENT_FAILURE]: appFailure,
  [DocumentsTypes.GET_IMAGE_LIST_REQUEST]: appRequest,
  [DocumentsTypes.GET_IMAGE_LIST_SUCCESS]: getImageListSuccess,
  [DocumentsTypes.GET_IMAGE_LIST_FAILURE]: appFailure,
  [DocumentsTypes.GET_DATA_INTRO_REQUEST]: appRequest,
  [DocumentsTypes.GET_DATA_INTRO_SUCCESS]: getDataIntroSuccess,
  [DocumentsTypes.GET_DATA_INTRO_FAILURE]: appFailure,
  [DocumentsTypes.PUBDOC_PREVIEW_FILE_REQUEST]: appRequest,
  [DocumentsTypes.PUBDOC_PREVIEW_FILE_SUCCESS]: getPubDocFileSuccess,
  [DocumentsTypes.PUBDOC_PREVIEW_FILE_FAILURE]: appFailure,
};

export const document = createReducer(INITIAL_STATE, HANDLERS);
