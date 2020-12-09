import { defineConfig } from 'umi';
import RouteConfig from './route.config';

export default defineConfig({
  routes: RouteConfig,
  nodeModulesTransform: {
    type: 'none',
  },
  proxy: {
    '/api': {
      target: '127.0.0.1',
      changeOrigin: true,
      // pathRewrite: { '^api': '' }
    },
  },
  dva: {},
  antd: {},
});
