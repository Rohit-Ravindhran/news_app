import axios from 'axios';
import ConfigSettings from '../../preference/ConfigSettings';

const authInstance = axios.create({
  baseURL: ConfigSettings.apiUrl,
  validateStatus: status => status === 200 || 401,
});

authInstance.defaults.headers.common['Content-Type'] = 'multipart/form-data';

authInstance.defaults.timeout = 5000;

const appInstance = axios.create({
  baseURL: ConfigSettings.apiUrl,
  validateStatus: status => status === 200 || 401,
});

appInstance.defaults.headers.common['Content-Type'] = 'multipart/form-data';

appInstance.defaults.timeout = 20000;

export const setToken = token => {
  appInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Api services
export default {
  postAppInstance(url, data) {
    return appInstance
      .post(url, data)
      .then(async response => {
        return response.data;
      })
      .catch(error => {
        return false;
      });
  },
  getAppInstance(url, params) {
    return appInstance
      .get(url, params)
      .then(async response => {
        return response.data;
      })
      .catch(error => {
        return false;
      });
  },
};
