import { fakeControlCenter } from '@/services/api';

export default {
  namespace: 'controlcenter',
  state: {
    tags: {},
    assets: {},
    mids: {},
  },
  effects: {
    *query({ type, payload }, { put, call, select }) {
      const localTags = {
        flawCount: 233,
        weakPawdCount: 112,
        verSuccess: 404,
        useSuccess: 250,
      };
      const localAssets = {
        allAssets: 1,
        switch: 2,
        industrial: 3,
        lot: 4,
        others: 5,
      };

      const response = yield call(fakeControlCenter, payload);
      const { tags, assets, mids } = response.data;
      yield put({
        type: 'save',
        payload: {
          tags: tags || localTags,
          assets: assets || localAssets,
          mids: mids,
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
  // subscriptions: {
  //     setup({ dispatch, history }) {
  //         return history.listen(({ pathname }) => {
  //             if (pathname === '/controlcenter') {
  //                 dispatch({
  //                     type: 'query',
  //                 })
  //             }
  //         })
  //     }
  // },
};
