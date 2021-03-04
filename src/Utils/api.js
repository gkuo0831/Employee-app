import axios from "axios";
const BASEURL = "https://randomuser.me/api/";

export default {
  getUsers: function (query) {
    return axios.get(BASEURL + query);
  },
};
