import AuthComponent from '../wrappers/Authorized';
import BasicLayout from '../layouts/BasicLayout';
import UserLayout from '../layouts/UserLayout'
import Login from '../pages/User/Login';
import Account from '../pages/Account';
import Article from '../pages/Article';
import CreateAccount from '../pages/Account/CreateAccount';
import AccountLayout from '../pages/Account/_layout';
import Exception403 from '../pages/Exception/403';
import Exception404 from '../pages/Exception/404';
import Exception500 from '../pages/Exception/500';


const userRouter = [
  {
    path: '/user',
    component: UserLayout,
    routes: [
      {
        path: '/user/',
        component: Login,
      },
    ]
  },
];

const appRouter = [
  {
    path: '/',
    component: BasicLayout,
    wrapper: AuthComponent,
    routes: [
      {
        path: '/',
        redirect: '/account',
      },
      {
        path: '/account',
        name: '个人信息',
        component: AccountLayout,
        routes: [
          {
            path: '/account/',
            redirect: '/account/overview',
          },
          {
            path: '/account/overview',
            component: Account,
          },
          {
            path: '/account/create',
            component: CreateAccount,
          },
        ],
      },
      {
        path: '/article',
        name: '文章管理',
        component: Article,
      },
      {
        path: '/photo',
        name: '图片管理',
        component: Article,
      },
      {
        path: '/script',
        name: '脚本管理',
        component: Article,
      },
      {
        path: '/audio',
        name: '音频管理',
        component: Article,
      },
      {
        path: '/exception',
        name: 'exception',
        showMenu: false,
        routes: [
          {
            path: '/exception/',
            redirect: '/exception/404',
          },
          {
            path: '/exception/403',
            component: Exception403,
          },
          {
            path: '/exception/404',
            component: Exception404,
          },
          {
            path: '/exception/500',
            component: Exception500,
          },
        ]
      },
    ],
  },
];

const routerConfig = [
  ...userRouter,
  ...appRouter,
];

export { userRouter, appRouter };

export default routerConfig;