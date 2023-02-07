import NotFound from '@components/NotFound';
import { TopProgressCom } from '@services/utils/topProgress.service';
import AuthProvider from 'context/auth';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IRouteList, routeList } from './list.route';

// const PrivateRoute = memo(({ children }) => {
// setWindowTitle();
// const { isAuthenticated, logout } = useAuth();
// const { user_data } = useSelector((state: any) => state?.user);
// const location = useLocation();
// if (isAuthenticated) {
//   if (
//     isDateExpired(user_data?.store_package_renewal_date) &&
//     !expiredRoutes.includes(location.pathname)
//   ) {
//     ToastService.warning('Please upgrade your plan first');
//     return <Navigate to={SETTINGS_PRICING_PLAN} />;
//   }
//   return children;
// }
// return logout();
// });
// const Home = lazy(() => import('@pages/SignUp/SignUp'));

export const Router = () => (
  <React.Fragment>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {routeList.map((route: IRouteList, index: number) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Suspense fallback={<TopProgressCom />}>
                    <route.component />
                  </Suspense>
                }
              />
            );
          })}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.Fragment>
);
