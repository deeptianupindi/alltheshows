import axios from 'axios'

/** base url to make requests to the movie database */
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  // baseURL: 'https://api.bing.microsoft.com/v7.0/custom/search?customconfig=25f2fec3-91b1-478a-b905-72f608132f08&mkt=en-US',
  // headers: {'Ocp-Apim-Subscription-Key': '885b0a8d44774081907df0f2ee3b5107'}
})

export default instance
