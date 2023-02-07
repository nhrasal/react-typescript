import { FC, lazy } from 'react';
import { HOME, SIGNUP } from './path-name.route';

const Home = lazy(() => import('@pages/Home/Home'));
const Signup = lazy(() => import('@pages/SignUp/SignUp'));
export interface IRouteList {
  params?: { [key: string]: string };
  path: any;
  component: FC;
}
export const routeList: IRouteList[] = [
  {
    path: HOME,
    component: Home
  },
  {
    path: SIGNUP,
    component: Signup
  }
];
