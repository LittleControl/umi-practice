import { fakeTargetDetection } from '@/services/api';

export default {
  namespace: 'targetdetection',
  state: {
    tableData: [],
  },
  effects: {
    *query({ type, payload }, { call, put, select }) {
      const response = yield call(fakeTargetDetection, payload);
      const { tableData } = response.data;
      yield put({
        type: 'save',
        payload: {
          tableData,
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
