import { ReactElement } from 'react';
import './FormStyle.scss';

interface IFormStep {
  currentStep: number;
  children: any | ReactElement;
  prevStep: Function;
}

const steps = [
  { id: 0, title: 'Account Information' },
  { id: 1, title: 'Personal Information' },
  { id: 2, title: 'Image Upload' },
  { id: 4, title: 'Finish' }
];

const FormStep = ({ currentStep, children, prevStep }: IFormStep) => {
  return (
    <div className="">
      {currentStep < 2 && (
        <>
          <div className="d-flex justify-content-between px-5">
            <h5 className="text-custom">{steps[currentStep].title} :</h5>
            <h5 className="text-secondary">Step {currentStep + 1} - 4</h5>
          </div>
        </>
      )}
      {children}
    </div>
  );
};

export default FormStep;
