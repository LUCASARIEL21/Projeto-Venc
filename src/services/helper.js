export const addTokenToRequest = (axiosInstance) => {
  axiosInstance.interceptors.request.use((config) => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    const authorization = userToken || null;

    if (authorization) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${userToken.token}`;
    }
    return config;
  });
};
