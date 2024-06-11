import * as Yup from 'yup';

const validPasswordMessage =
  'Tối thiểu 6 ký tự.\n Ít nhất 1 chữ in hoa, 1 chữ số và 1 ký tự đặc biệt';
const regexPassword = /^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/;
const requiredErrorMessage = 'Trường này là bắt buộc';
const confirmPasswordMessage = 'Mật khẩu không trùng khớp';
const passwordMinSix = 'Mật khẩu tối thiểu 6 ký tự';
const passwordMaxTwenty = 'Mật khẩu tối đa 20 ký tự';
const newPasswordMessage = 'Mật khẩu mới không được trùng mật khẩu cũ';
const validatePhone = 'Số điện thoại không đúng định dạng';
const requirePhone = 'Yêu cầu nhập số điện thoại';
const requireDOB = 'Yêu cầu chọn ngày sinh';
const requireAddress = 'Yêu cầu tạo địa chỉ';
const validateOtp = 'Vui lòng nhập đủ số xác thực';
const requireOtp = 'Vui lòng nhập mã xác thực';
const enterAddress = 'Yêu cầu nhập địa chỉ';
const chooseCity = 'Yêu cầu chọn tỉnh thành phố';
const chooseDistrict = 'Yêu cầu chọn quận huyện';
const chooseWard = 'Yêu cầu chọn phường xã';
const enterFeedback = 'Vui lòng nhập thông tin góp ý khiếu nại';
const validationName = 'Vui lòng nhập tên địa chỉ';
const validationUsername = 'Vui lòng nhập họ và tên';

const regexFullName =
  /^[a-zvxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđÆ.-]{1,}(?: [a-zvxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđÆ.-]+){0,6}$/;
const validNameMessage = 'Vui lòng nhập đúng định dạng tên';

const password = Yup.string()
  .min(6, passwordMinSix)
  .max(20, passwordMaxTwenty)
  .matches(regexPassword, validPasswordMessage)
  .required(requiredErrorMessage);
const phone_number = Yup.string()
  .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, validatePhone)
  .required(requirePhone);

export const yupSchemaLoginPassword = Yup.object({
  password,
});
export const yupSchemaRegister = Yup.object({
  password,
  confirmPassword: Yup.string()
    .required(requiredErrorMessage)
    .oneOf([Yup.ref('password')], confirmPasswordMessage),
});

export const yupSchemaInfoUser = Yup.object({
  name: Yup.string()
    .lowercase()
    .required(requiredErrorMessage)
    .matches(regexFullName, validNameMessage),
  phone_number,
  birthday: Yup.string().required(requireDOB),
  address: Yup.string().required(requireAddress),
});

export const yupSchemaCheckPhone = Yup.object({
  phone_number,
});
export const yupSchemaOtp = Yup.object({
  optInput: Yup.string().min(6, validateOtp).required(requireOtp),
});
export const yupSchemaAddress = Yup.object({
  address: Yup.string().required(enterAddress),
  city: Yup.object({
    Name: Yup.string().required(chooseCity),
  }),
  district: Yup.object({
    Name: Yup.string().required(chooseDistrict),
  }),
  ward: Yup.object({
    Name: Yup.string().required(chooseWard),
  }),
});
export const yupChangePasswordSchema = Yup.object().shape({
  old_password: Yup.string()
    .min(6, passwordMinSix)
    .max(20, passwordMaxTwenty)
    .matches(regexPassword, validPasswordMessage)
    .required(requiredErrorMessage),
  new_password: Yup.string()
    .min(6, passwordMinSix)
    .max(20, passwordMaxTwenty)
    .matches(regexPassword, validPasswordMessage)
    .required(requiredErrorMessage)
    .notOneOf([Yup.ref('old_password'), null], newPasswordMessage),
  confirm_password: Yup.string()
    .required(requiredErrorMessage)
    .oneOf([Yup.ref('new_password'), null], confirmPasswordMessage),
});
export const yupSchemaSendRequest = Yup.object({
  description: Yup.string().required(enterFeedback),
});

export const yupSchemaBokkAddress = Yup.object({
  user_phone: phone_number,
  user_name: Yup.string().required(validationName),
  address_name: Yup.string().required(validationName),
  address: Yup.string().required(validationUsername),
});
