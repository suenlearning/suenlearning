import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const getWorksheets = () => {
  return apiClient.get('/worksheet-types')
}

// const getEvent = (id) => {
//   return apiClient.get("/events/" + id);
// };

export default { getWorksheets }
