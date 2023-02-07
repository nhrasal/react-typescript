/* eslint-disable react-hooks/exhaustive-deps */
import { LocalStorageService } from '@services/utils/localsStorage.service';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { isExpiredToken } from 'utils/jwt';

type AuthProps = {
  isAuthenticated: boolean;
  authenticate: Function;
  logout: Function;
};

export const AuthContext = React.createContext({} as AuthProps);
// TODO need to checking valid token and expired

export const useAuth = () => useContext(AuthContext);

const isValidToken = () => {
  const accessToken = LocalStorageService.get('accessToken');

  if (!accessToken) return false;

  return !isExpiredToken(accessToken);
};

const AuthProvider = (props: any) => {
  const [isAuthenticated, makeAuthenticated] = useState<boolean>(isValidToken());
  // every 5 seconde checking the token
  useEffect(() => {
    setInterval(() => {
      if (!isValidToken()) makeAuthenticated(isValidToken());
    }, 5000);

    const handleInvalidToken = (e) => {
      if (e.key === 'accessToken' && e.oldValue && !e.newValue) logout();
    };

    window.addEventListener('storage', handleInvalidToken);
    return () => window.removeEventListener('storage', handleInvalidToken);
  }, []);

  useEffect(() => {
    makeAuthenticated(isValidToken());
  }, [isValidToken()]);

  const authenticate = ({ accessToken }: any, callBack: () => void) => {
    if (accessToken) {
      makeAuthenticated(true);
      LocalStorageService.set('accessToken', accessToken);
    }
    callBack();
  };

  const logout = () => {
    makeAuthenticated(false);
    LocalStorageService.clear();
    // window.location.replace(ENV.LandingPageURL + 'store-list');
  };
  const memoedProps = useMemo(
    () => ({
      authenticate,
      isAuthenticated,
      logout
    }),
    [authenticate, isAuthenticated, logout]
  );

  // context
  return (
    <AuthContext.Provider value={memoedProps}>
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
