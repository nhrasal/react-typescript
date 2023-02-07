interface IENV {
  ApiEndPoint: string | undefined;
  LocalBaseURL: string | undefined;
  env: string | undefined;
}

export const ENV: IENV = {
  ApiEndPoint: process.env.REACT_APP_BASE_URL,
  LocalBaseURL: process.env.REACT_APP_BASE_URL,
  env: process.env.REACT_APP_ENV
};
