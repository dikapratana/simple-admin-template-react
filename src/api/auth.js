import fetch from '../utils/fetch';

import { SERVICES } from '../configs';
import { clearStorages } from '../utils/storage';

export async function registerUser(data) {
  return await fetch.post(`${SERVICES.login}/auth/register`, data);
}

export async function login(params) {
  return await fetch.post(`${SERVICES.login}`, params );
}

export function logout() {
  clearStorages();
}
