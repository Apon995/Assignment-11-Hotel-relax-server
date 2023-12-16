import axios from 'axios'
import React, { useEffect } from 'react';
import useAuth from './useAuth';



const axiosFetch = axios.create({
    // https://hotel-relax-server.vercel.app
    // http://localhost:5000
    baseURL: 'https://hotel-relax-server.vercel.app',
    withCredentials: true,
    method: ["GET", "POST", "PUT", "PATCH", "DELETE"]
})


function useFetch() {
    const auth = useAuth();

    useEffect(() => {
        axiosFetch.interceptors.response.use(response => {
            return response;
        }, (error) => {
            if (error.response.status == 401 || error.response.status == 403) {
                auth?.Logout()
            }

        })
    }, [])


    return axiosFetch;
}

export default useFetch