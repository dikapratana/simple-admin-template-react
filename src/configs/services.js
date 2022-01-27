let BASE_URL;

BASE_URL = {
  auth: '// url service auth'
};

export { BASE_URL };

const services = {
  login: BASE_URL.auth + '/login',
  logout: BASE_URL.auth + '/logout'
};

export default services;
