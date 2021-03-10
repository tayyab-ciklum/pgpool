const { REACT_APP_API_BASE_URL } = window.ENV_CONFIG || process.env;
export const Config = {
  BASE_URL: REACT_APP_API_BASE_URL
};

export default Config;
