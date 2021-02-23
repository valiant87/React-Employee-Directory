import axios from "axios";
//This is initialize and store 100 random users fro this API
const BASEURL = "https://randomuser.me/api/?results=100";
function search() {
  return axios.get(BASEURL);
}

export default search;
