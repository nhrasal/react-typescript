import { ToastContainer } from 'react-toastify';

export const ToastComponent = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={4000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};
