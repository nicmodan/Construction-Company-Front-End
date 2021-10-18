import axios from "axios";
const baseUrl = '/api/info'

let token = null

const setToken = newToken =>{
    token = `bearer ${newToken}`
    // console.log(token)
}

const getAll = async()=>{
    const response = await axios.get(baseUrl)
    return response.data  
}

const getId = async(id)=>{
    const response = await axios.get(baseUrl+`/:${id}`)
    return response.data
}

const create = async request=>{
    // console.log(request)
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.post(baseUrl, request, config)
    return response.data
}

const uploadLogo = async request=>{
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.post(baseUrl+'/upload', request, config)
    return response.data
}
const update = async (request, id) =>{
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.put(baseUrl+`/:${id}`, request, config)
    return response.data
}
const updateLogo = async (request, id) =>{
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.put(baseUrl+`/logo/:${id}`, request, config)
    return response.data

}

const loger = (target)=>{
    console.log(target)
}

export default {setToken, getAll,  getId, create, uploadLogo, update, updateLogo, loger}