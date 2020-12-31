import { fakeNetManage } from '@/services/api';

export default {
  namespace: 'netmanage',
  state: {
    ipData: [],
    infaData: [],
    routeData: [],
    dnsInfo: {},
  },
  effects: {
    *query({ type, payload }, { put, call, select }) {
      const response = yield call(fakeNetManage);
      const { ipData, infaData, routeData, dnsInfo } = response.data;
      yield put({
        type: 'save',
        payload: {
          ipData,
          infaData,
          routeData,
          dnsInfo,
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
    *addRoute({ payload }, { put }) {
      const { values } = payload;
      yield put({
        type: 'routeAdd',
        payload: {
          values,
        },
      });
    },
    *editDns({ payload }, { put }) {
      const { main_dns, minor_dns } = payload;
      yield put({
        type: 'dnsEdit',
        payload: {
          main_dns,
          minor_dns,
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
    routeAdd(state, { payload }) {
      const routeData = [...state.routeData];
      const { values } = payload;
      routeData.push(values);
      return {
        ...state,
        routeData,
      };
    },
    dnsEdit(state, { payload }) {
      const dnsInfo = {
        ...state.dnsInfo,
        ...payload,
      };
      return {
        ...state,
        dnsInfo,
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
