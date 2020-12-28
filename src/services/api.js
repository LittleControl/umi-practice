import { request } from 'umi';

export async function fakeControlCenter() {
  return await request('/api/controlcenter', {
    method: 'GET',
  });
}

export async function fakeTargetDetection() {
  return await request('/api/targetdetection', {
    method: 'GET',
  });
}

export async function fakeNetManage() {
  return await request('/api/netmanage');
}

export async function testApi() {
  return await request('/test', {
    method: 'GET',
  });
}
