export const API_ENDPOINT = {
  AUTH: {
    CHECK_PHONE_NUMER: '/api/auth/check_account_exist',
    FORGOT_PASSWORD: '/api/auth/forgot_password',
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    REGISTER: '/api/auth/register',
    REFRESH_TOKEN: '/api/auth/refresh_token',
  },
  PRODUCT: {
    DETAIL: '/api/product',
    PRODUCT_CATEGORY_ALL: '/api/product/category_detail',
    PRODUCT_CATEGORY_ID: '/api/product/category',
    SEARCH: '/api/product/keyword',
    TAG: '/api/product/tag',
  },
  BRANCH: {
    MAIN: '/api/branch',
  },
  BANNER: {
    MAIN: '/api/banner',
  },
  ORDER: {
    MAIN: '/api/order',
  },
  NOTI: {
    MAIN: '/api/notification',
    SEEN_ALL: '/api/notification/seen/all',
    DELETE_ALL: '/api/notification/delete/all',
  },
  DISCOUNT: {
    MAIN: '/api/discount',
  },
  CART: {
    MAIN: '/api/cart',
    ORDER: '/api/cart/order',
  },
  CATEGORY: {
    MAIN: '/api/category',
  },
  OTP: {
    SENT_OTP: '/api/otp/send',
    VERIFY_OTP: '/api/otp/verify',
  },
  USER: {
    ADDRESS: '/api/user/address',
    HISTORY_POINT: '/api/user/history_point',
    INFO: '/api/user/me',
    REQUEST: '/api/user/request',
    CHANGE_PASSWORD: '/api/user/me/change_password',
  },
  UTIL: {
    CADASTRAL: '/api/utils/cadastral_vn',
    UPLOAD: '/api/utils/upload',
    MULTIPLE_UPLOAD: '/api/utils/upload_multiple',
  },
  NEWS: {
    MAIN: '/api/news',
    CATEGORY: '/api/news/category',
  },
  KEYWORD: {
    MAIN: '/api/keyword',
  },
};
