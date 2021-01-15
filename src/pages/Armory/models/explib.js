import { fakeExpLib, fakeExplibSearch } from '@/services/api';

export default {
  namespace: 'explib',
  state: {
    exp_data: [
      {
        id: '',
        cve_name: '',
        risk_level: '',
        cve_id: '',
        cve_author: '',
        cve_time: '',
        full_name: '',
        description: '',
      },
    ],
  },
  effects: {
    *query({}, { call, put }) {
      const {
        data: { exp_data },
      } = yield call(fakeExpLib);
      yield put({
        type: 'save',
        payload: {
          exp_data,
        },
      });
    },
    *search({ payload }, { call, put }) {
      const { name } = payload;
      const {
        data: { exp_data },
      } = yield call(fakeExpLibSearch, name);
      yield put({
        type: 'save',
        payload: {
          exp_data,
        },
      });
    },
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  subscriptions: {},
};
