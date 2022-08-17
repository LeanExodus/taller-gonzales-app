import axios from 'axios'

const TGonzalesApi = axios.create({
  baseURL: "https://ptallergonzales.herokuapp.com/api",
});

export default TGonzalesApi