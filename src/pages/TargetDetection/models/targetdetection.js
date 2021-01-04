import { fakeTargetDetection, fakeFilter } from '@/services/api';

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
    *filter({ payload }, { call, put }) {
      let str = '/api/filter?';
      for (let item in payload) {
        if (payload[item] || payload[item] === 0) {
          if (typeof payload[item] === 'object') {
            for (let obj in payload[item]) {
              if (payload[item][obj] || payload[item][obj] === 0) {
                str += `${obj}=${payload[item][obj]}&`;
              }
            }
          } else {
            str = str + `${item}=${payload[item]}&`;
          }
        }
      }
      //删除末尾的 &
      str = str.slice(0, -1);
      const response = yield call(fakeFilter, str);
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
