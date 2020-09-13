const baseUrl = "http://localhost:4000";

const endpoints = {
  getUser: "/auth/login/success",
};

const getUrl = (endpoint, base_url = baseUrl) => {
  return `${base_url}${endpoint}`;
};

const api = {
  getUser: getUrl(endpoints.getUser),
};

export default api;
