export default [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '/',
        // component: './index',
        redirect: '/controlcenter',
      },
      {
        path: '/controlcenter',
        component: './ControlCenter/ControlCenter',
      },
      {
        path: '/targetdetection',
        component: './TargetDetection/TargetDetection',
      },
    ],
  },
];
