import { fakeExpLib } from '@/services/api';

export default {
  namespace: 'explib',
  state: {
    exp_data: [],
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
