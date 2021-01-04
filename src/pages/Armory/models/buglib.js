import { fakeBugLib } from '@/services/api';

export default {
  namespace: 'buglib',
  state: {
    type_data: [],
    name_data: [],
  },
  effects: {
    *query({ _ }, { call, put }) {
      const response = yield call(fakeBugLib);
      const { type_data, name_data } = response.data;
      yield put({
        type: 'save',
        payload: {
          type_data,
          name_data,
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
