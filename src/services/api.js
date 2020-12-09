import { request } from 'umi';

export async function fakeControlCenter() {
  return request('/api/controlcenter', {
    method: 'GET',
  });
}
