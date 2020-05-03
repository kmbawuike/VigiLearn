import axios from 'axios'
import {trackPromise} from 'react-promise-tracker'


class Request {
    get = async (url, headers={})=>{
    const res = await axios.get(url, {
       headers: {
        Accept: 'application/json',
        ...headers
       } 
    })
    return res.data
    }

    post = async (url, body={}, headers={})=>{
        const res = await axios.post(url, body ,{
            
                'Content-Type' : 'application/json',
                Accept: 'application/json',
                ...headers
            
        })

        return res.data
    }
    
    // getUsers = async (url, headers = {}) =>
    // (await fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         Accept: 'application/json',
    //         ...headers
    //     }
    // })).json();


}

export default Request