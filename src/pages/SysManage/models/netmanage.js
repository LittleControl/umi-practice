import { fakeNetManage } from '@/services/api';

export default {
  namespace: 'netmanage',
  state: {
    ipData: [],
    infaData: [],
    routeData: [],
  },
  effects: {
    *query({ type, payload }, { put, call, select }) {
      const response = yield call(fakeNetManage);
      const { ipData, infaData, routeData } = response.data;
      yield put({
        type: 'save',
        payload: {
          ipData,
          infaData,
          routeData,
        },
      });
    },
    *deleteRow({ payload }, { put }) {
      const { row } = payload;
      yield put({
        type: 'delete',
        payload: {
          row,
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
    delete(state, { payload }) {
      const { row } = payload;
      console.log(row);
      const index = state.ipData.indexOf(row);
      state.ipData.splice(index, 1);
      return {
        ...state,
      };
    },
  },
  subscriptions: {
    setup() {},
    //   setup({ dispatch, history }) {
    //     return history.listen(({ pathname }) => {
    //       if (pathname === 'netmanage') {
    //         dispatch({
    //           type: 'query'
    //         })
    //       }
    //     })
    //   }
  },
};
