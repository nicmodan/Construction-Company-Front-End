import axios from "axios";
const baseUrl = '/api/projects'

let token = null 

const setToken = (newToken)=>{
    token = `bearer ${newToken}`
}

const review = async ()=>{

    // const config = {
    //     headers: { Authorization: token }
    // }
    const response = await axios.get(baseUrl)
    return response.data
    
}
const reviewId = async (id)=>{

    // const config = {
    //     headers: { Authorization: token }
    // }
    const response = await axios.get(`${baseUrl}/:${id}`)
    return response.data
    
}

const create = async request =>{
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.post(baseUrl, request, config)
    return response
}

const createPrjImg = async request =>{
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.post(baseUrl+'/upload', request, config)
    return response
}

const replace = async (request, id)=>{
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.put(baseUrl+`/update/:${id}`, request, config)
    return response
}

const replacePrjImg = async (request, id)=>{
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.put(baseUrl+`/update/upload/:${id}`, request, config)
    return response
}

const remove = async id =>{
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.delete(baseUrl+`/delete/:${id}`, null, config)
    return response
}

export default {setToken, review, reviewId, create, createPrjImg, replace, replacePrjImg, remove}