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

export async function fakeFilter(url) {
  return await request('/api/filter/port');
}

export async function fakeNetManage() {
  return await request('/api/netmanage');
}

export async function fakePocLib() {
  return await request('/api/poclib');
}

export async function fakeBugLib() {
  return await request('/api/buglib');
}

export async function fakeExpLib() {
  return await request('/api/explib');
}

export async function testApi() {
  return await request('/test', {
    method: 'GET',
  });
}
