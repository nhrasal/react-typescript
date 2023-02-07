import * as yup from 'yup';

export const AccountInfoSchema = yup.object({
  email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
  username: yup.string().max(255).required('Email is required'),
  password: yup
    .string()
    .required('Please type new password')
    // .notOneOf([yup.ref('old_password')], 'Password must not be match with current password')
    .min(8, 'password must be 8 characters'),
  confirmPassword: yup
    .string()
    .required('Please type confirm password')
    .oneOf([yup.ref('password'), null], 'Password must be match with New Password')
});

export const PersonalInfoSchema = yup.object({
  firstName: yup.string().required('Must be a valid email').max(255),
  lastName: yup.string().required('Must be a valid email').max(255),
  contactNo: yup.string().required('Contact Number is required'),
  alternateContactNo: yup.string().required('Alternate Contact No. is required')
});
