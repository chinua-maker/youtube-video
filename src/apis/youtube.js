import Axios from 'axios';

const KEY = 'AIzaSyBckuXla0xgHoqLRwb-GXgJStvRpnJtCSY';

export default Axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 7,
    key: KEY
  }
})