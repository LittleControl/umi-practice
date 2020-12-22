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
      {
        path: '/eventsurvey',
        component: './EventSurvey/EventSurvey',
      },
      {
        path: '/buglib',
        component: './Armory/BugLib',
      },
      {
        path: '/passwdlib',
        component: './Armory/PasswdLib',
      },
      {
        path: '/poclib',
        component: './Armory/POCLib',
      },
      {
        path: '/explib',
        component: './Armory/EXPLib',
      },
      {
        path: '/netmanage',
        component: './SysManage/NetManage',
      },
      {
        path: '/accountmanage',
        component: './SysManage/AccountManage',
      },
      {
        path: '/licensemanage',
        component: './SysManage/LicenseManage',
      },
    ],
  },
];
