import axios from "axios";

const KEY = "AIzaSyDIbpNOQ8R3cvq1nReUZlo8iXFIpzVJZHs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
