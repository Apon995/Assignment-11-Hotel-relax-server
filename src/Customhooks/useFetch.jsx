import axios from 'axios'



const axiosFetch = axios.create({
    baseURL : 'http://localhost:5000',
    withCredentials : true
})


function useFetch() {
  

    return axiosFetch;
}

export default useFetch