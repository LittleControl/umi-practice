import { fakePocLib } from '@/services/api';

export default {
  namespace: 'poclib',
  state: {
    treeData: [],
    listData: [],
  },
  effects: {
    *query({ payload }, { call, put }) {
      const response = yield call(fakePocLib);
      const { treeData, listData } = response.data;
      yield put({
        type: 'save',
        payload: {
          treeData,
          listData,
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
