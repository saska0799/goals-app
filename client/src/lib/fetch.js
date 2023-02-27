import axios from "axios";

export const getFetch = (url, config = {}) => {
  return axios({
    url,
    ...config,
  }).then((res) => res.data);
};
