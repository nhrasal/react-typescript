import RequiredText from '@components/RequiredText/RequiredText';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFormData } from 'context';
import { useForm } from 'react-hook-form';
import { PersonalInfoSchema } from '../FromValidation';

interface IPersonalInfo {
  firstName: string;
  lastName: string;
  contactNo: number;
  alternateContactNo: number;
}

interface IProps {
  formStep: number;
  nextFormStep: Function;
  prevFormStep: Function;
}

const PersonalInfo = ({ formStep, nextFormStep, prevFormStep }: IProps) => {
  const { setFormValues } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm<IPersonalInfo>({ mode: 'all', resolver: yupResolver(PersonalInfoSchema) });

  const onSubmit = (values: IPersonalInfo) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={`px-5 py-2 ${formStep === 1 ? 'show-form' : 'hide-form'}`}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <label className="" htmlFor="firstName">
            Frist Name: <RequiredText text={'*'} />
          </label>
          <input
            className="form-control"
            id="firstName"
            {...register('firstName', {
              required: true
            })}
            placeholder="First Name"
          />
          {errors.firstName && <RequiredText text={'First Name is required'} />}
        </div>
        <div className="my-2">
          <label className="" htmlFor="lastName">
            Last Name: <RequiredText text={'*'} />
          </label>
          <input
            className="form-control"
            id="lastName"
            {...register('lastName', {
              required: true
            })}
            placeholder="Last Name"
          />
          {errors.lastName && <RequiredText text={'Last Name is required'} />}
        </div>
        <div className="my-2">
          <label className="" htmlFor="contactNo">
            Contact No: <RequiredText text={'*'} />
          </label>
          <input
            className="form-control"
            id="contactNo"
            {...register('contactNo', {
              required: true
            })}
            placeholder="Contact No."
          />
          {errors.contactNo && <RequiredText text={'Contact No. is required'} />}
        </div>
        <div className="my-2">
          <label className="" htmlFor="alternateContactNo">
            Alternate Contact No: <RequiredText text={'*'} />
          </label>
          <input
            className="form-control"
            id="alternateContactNo"
            {...register('alternateContactNo', {
              required: true
            })}
            placeholder="Alternate Contact No."
          />
          {errors.alternateContactNo && <RequiredText text={'Alternate Contact No.is required'} />}
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

export default PersonalInfo;
