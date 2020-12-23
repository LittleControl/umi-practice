import { defineConfig } from 'umi';
import RouteConfig from './route.config';

export default defineConfig({
  routes: RouteConfig,
  nodeModulesTransform: {
    type: 'none',
  },
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:5000',
      changeOrigin: true,
      // pathRewrite: { '^test': '' },
    },
  },
  dva: {},
  antd: {},
  theme: {
    // "font-size-base": "24px",
  },
});
