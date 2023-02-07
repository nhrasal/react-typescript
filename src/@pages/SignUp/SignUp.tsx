import FormFinish from '@components/Forms/FormFinish';
import FormStep from '@components/Forms/FormStep';
import AccountInfo from '@components/Forms/FormsType/AccountInfo';
import ImageForm from '@components/Forms/FormsType/ImageForm';
import PersonalInfo from '@components/Forms/FormsType/PersonalInfo';
import { useState } from 'react';

const SignUp = () => {
  const [formStep, setFormStep] = useState<number>(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  console.log(formStep);

  return (
    <div className="">
      <div className="container">
        <div className="mt-5 border w-50 m-auto p-3 rounded">
          <h4 className="text-center text-custom mb-3">Sign Up Your User Account</h4>
          <span className="text-secondary text-center d-block mb-4 ">
            Fill all the filed to go next step
          </span>
          <div className="form-main">
            <FormStep currentStep={formStep} prevStep={prevFormStep}>
              {formStep >= 0 && (
                <AccountInfo
                  formStep={formStep}
                  prevFormStep={prevFormStep}
                  nextFormStep={nextFormStep}
                />
              )}
              {formStep >= 1 && (
                <PersonalInfo
                  formStep={formStep}
                  prevFormStep={prevFormStep}
                  nextFormStep={nextFormStep}
                />
              )}
              {formStep >= 2 && (
                <ImageForm
                  formStep={formStep}
                  prevFormStep={prevFormStep}
                  nextFormStep={nextFormStep}
                />
              )}

              {formStep > 2 && <FormFinish />}
            </FormStep>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
