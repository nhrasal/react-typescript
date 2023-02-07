import { useFormData } from 'context';

const FormFinish = () => {
  const { data } = useFormData();
  console.log(data);
  return (
    <div className="">
      <h3 className="text-center text-custom">Success!</h3>
      <h1 className="text-center text-custom tick-sign">&#x2713;</h1>
      <p className="text-center text-custom">You Have Successfully Signed Up</p>
    </div>
  );
};

export default FormFinish;
