import { defineConfig } from 'umi';
import RouteConfig from './route.config';

export default defineConfig({
  routes: RouteConfig,
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {},
  antd: {},
});
