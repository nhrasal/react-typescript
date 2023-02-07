/* eslint-disable react/jsx-props-no-spreading */
import RequiredText from '@components/RequiredText/RequiredText';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFormData } from 'context';
import { useForm } from 'react-hook-form';
import { AccountInfoSchema } from '../FromValidation';

interface IAccountInfoForm {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

interface IProps {
  formStep: number;
  nextFormStep: Function;
  prevFormStep: Function;
}

const AccountInfo = ({ formStep, nextFormStep, prevFormStep }: IProps) => {
  const { setFormValues } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm<IAccountInfoForm>({ mode: 'all', resolver: yupResolver(AccountInfoSchema) });

  const onSubmit = (values: IAccountInfoForm) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={`px-5 py-2 ${formStep === 0 ? 'show-form' : 'hide-form'}`}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <label className="" htmlFor="email">
            Email: <RequiredText text={'*'} />
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register('email', {
              required: true
            })}
            placeholder="Email Id"
          />
          {errors.email && <RequiredText text={'Email is required'} />}
        </div>
        <div className="my-2">
          <label className="" htmlFor="username">
            Username: <RequiredText text={'*'} />
          </label>
          <input
            className="form-control"
            id="username"
            {...register('username', {
              required: true
            })}
            placeholder="User Name"
          />
          {errors.username && <RequiredText text={'Username is required'} />}
        </div>
        <div className="my-2">
          <label className="" htmlFor="password">
            Password: <RequiredText text={'*'} />
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register('password', {
              required: true
            })}
            placeholder="Password"
          />
          {errors.password && <RequiredText text={'Password is required'} />}
        </div>
        <div className="my-2">
          <label className="" htmlFor="confirmPassword">
            Confirm Password: <RequiredText text={'*'} />
          </label>
          <input
            className="form-control"
            id="confirmPassword"
            {...register('confirmPassword', {
              required: true
            })}
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && <RequiredText text={'Confirm Password is required'} />}
        </div>
        <div className="d-flex justify-content-end">
          {formStep > 0 && (
            <button onClick={() => prevFormStep()} className="btn btn-secondary me-2" type="button">
              back
            </button>
          )}
          <button type="submit" className="btn button">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountInfo;
