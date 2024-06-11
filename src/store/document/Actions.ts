import {createTypes} from 'reduxsauce';
import {IParamsRequest} from 'types';

/**
 * @description define types of contract's actions
 */
export const DocumentsTypes = createTypes(`
  GET_DOCUMENT_REQUEST
  GET_DOCUMENT_SUCCESS
  GET_DOCUMENT_FAILURE
  
  GET_IMAGE_LIST_SUCCESS
  GET_IMAGE_LIST_FAILURE
  GET_IMAGE_LIST_REQUEST
  
  GET_DATA_INTRO_REQUEST
  GET_DATA_INTRO_SUCCESS
  GET_DATA_INTRO_FAILURE
  
  PUBDOC_PREVIEW_FILE_REQUEST
  PUBDOC_PREVIEW_FILE_SUCCESS
  PUBDOC_PREVIEW_FILE_FAILURE
`);

export const getDocumentRequest = (params: IParamsRequest) => ({
  params,
  type: DocumentsTypes.GET_DOCUMENT_REQUEST,
});

export const getImageListRequest = (params: IParamsRequest) => ({
  params,
  type: DocumentsTypes.GET_IMAGE_LIST_REQUEST,
});

export const getDataIntroRequest = (params: IParamsRequest) => ({
  params,
  type: DocumentsTypes.GET_DATA_INTRO_REQUEST,
});

export const onPreviewFileAttach = (params: IParamsRequest) => ({
  params,
  type: DocumentsTypes.PUBDOC_PREVIEW_FILE_REQUEST,
});
