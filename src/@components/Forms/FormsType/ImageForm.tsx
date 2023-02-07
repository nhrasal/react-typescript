import RequiredText from '@components/RequiredText/RequiredText';
import { useFormData } from 'context';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IImage {
  photo: File;
  signatureImg: File;
}

interface IProps {
  formStep: number;
  nextFormStep: Function;
  prevFormStep: Function;
}

const ImageForm = ({ formStep, nextFormStep, prevFormStep }: IProps) => {
  const { setFormValues } = useFormData();
  const [photoImg, setPhotoImg] = useState<string>('');
  const [signatureImg, setSignatureImg] = useState<string>('');

  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
    getValues
  } = useForm<IImage>({ mode: 'all' });

  const onSubmit = (values: IImage) => {
    setFormValues(values);
    nextFormStep();
  };

  const onChangePicture = (e: any, setFunction) => {
    const file = e.target.files[0];
    if (file) {
      setFunction(URL.createObjectURL(file));
    }
  };

  return (
    <div className={`px-5 py-2 ${formStep === 2 ? 'show-form' : 'hide-form'}`}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <label className="" htmlFor="photo">
            Upload Your Photo : <RequiredText text={'*'} />
          </label>
          <input
            type="file"
            className="form-control"
            id="photo"
            {...register('photo', {
              required: true,
              onChange: (e) => onChangePicture(e, setPhotoImg)
            })}
            placeholder="Upload Your Photo"
          />
          {errors.photo && <RequiredText text={'Photo is required'} />}
        </div>
        <div className="m-auto w-50 h-75">
          {photoImg && <img className="w-100 h-100" src={photoImg} alt="" />}
        </div>

        <div className="my-2">
          <label className="" htmlFor="signatureImg">
            Upload Your Signature : <RequiredText text={'*'} />
          </label>
          <input
            type="file"
            className="form-control"
            id="signatureImg"
            {...register('signatureImg', {
              required: true,
              onChange: (e) => onChangePicture(e, setSignatureImg)
            })}
            placeholder="Last Name"
          />
          {errors.signatureImg && <RequiredText text={'Signature Image is required'} />}
        </div>
        <div className="m-auto w-50 h-75">
          {signatureImg && <img className="w-100 h-100" src={signatureImg} alt="" />}
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

export default ImageForm;
