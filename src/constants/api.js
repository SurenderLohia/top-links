const baseUrl = "http://localhost:4000";
//const baseUrl = "https://top-links-api.herokuapp.com";

const endpoints = {
  getUser: "/auth/login/success",
  getTweets: "/twitter-api/get-tweets-contain-link",
  login: "/auth/twitter",
  logout: "/auth/logout",
};

const getUrl = (endpoint, base_url = baseUrl) => {
  return `${base_url}${endpoint}`;
};

const api = {
  getUser: getUrl(endpoints.getUser),
  getTweets: getUrl(endpoints.getTweets),
  login: getUrl(endpoints.login),
  logout: getUrl(endpoints.logout),
};

export default api;
