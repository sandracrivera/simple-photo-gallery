import axios from 'axios'

export default axios.create({
  baseURL: 'https://agencyanalytics-api.vercel.app/',
  headers: {
    'Content-type': 'application/json',
  },
})
