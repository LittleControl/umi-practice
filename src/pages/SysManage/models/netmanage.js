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
    *deleteIpRow({ payload }, { put }) {
      const { row } = payload;
      yield put({
        type: 'ipDelete',
        payload: {
          row,
        },
      });
    },
    *editIpRow({ payload }, { put }) {
      const { row, values } = payload;
      yield put({
        type: 'ipEdit',
        payload: {
          row,
          values,
        },
      });
    },
    *editInfaRow({ payload }, { put }) {
      const { row, values } = payload;
      yield put({
        type: 'infaEdit',
        payload: {
          row,
          values,
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
    ipDelete(state, { payload }) {
      const { row } = payload;
      const ipData = [...state.ipData];
      const index = ipData.indexOf(row);
      ipData.splice(index, 1);
      return {
        ...state,
        ipData,
      };
    },
    ipEdit(state, { payload }) {
      const { row, values } = payload;
      const ipData = [...state.ipData];
      const index = ipData.indexOf(row);
      ipData.splice(index, 1, values);
      return {
        ...state,
        ipData,
      };
    },
    infaEdit(state, { payload }) {
      const { row, values } = payload;
      const infaData = [...state.infaData];
      const index = infaData.indexOf(row);
      infaData[index] = Object.assign(row, values);
      return {
        ...state,
        infaData,
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
