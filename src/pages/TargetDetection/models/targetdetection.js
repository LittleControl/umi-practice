import { fakeTargetDetection } from '@/services/api';

export default {
  namespace: 'targetdetection',
  state: {
    table_data: [],
  },
  effects: {
    *query({ type, payload }, { call, put, select }) {
      const response = yield call(fakeTargetDetection, payload);
      const { table_data } = response.data;
      yield put({
        type: 'save',
        payload: {
          table_data,
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
  subscriptions: {
    setup() {},
  },
};
