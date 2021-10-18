import axios from "axios";
const baseUrl = '/api/profile'

let token = null

const setToken = (newToken)=>{
    token = `bearer ${newToken}`
}

const review = async(id) =>{
    const response = await axios.get(`${baseUrl}/:${id}`)
    return response.data
}

const create = async(request) =>{
    const config = {
        headers : { Authorization: token }
    }

    const response = await axios.post(baseUrl, request, config)
    return response.data
}

const createProfileImg = async(request) =>{
    const config = {
        headers : { Authorization: token }
    }
    const response = await axios.post(baseUrl+'/upload', request, config)
    return response.data
}

const replace = async(request, id)=>{
    const config = {
        headers : { Authorization: token }
    }
    const response = await axios.put(baseUrl+`/:${id}`, request, config)
    return response
}
const replaceProfileImg = async(request, id)=>{
    const config = {
        headers : { Authorization: token }
    }
    const response = await axios.put(baseUrl+`/update/upload/:${id}`, request, config)
    return response.data
}

export default {setToken, review, create, createProfileImg, replace, replaceProfileImg}