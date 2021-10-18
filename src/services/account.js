import axios from "axios";
const baseUrl = '/api/account'

const createAccount = async (accountInfo) =>{
    const response = await axios.post(baseUrl, accountInfo)
    // console.log(response.data)
    return response
}

export default createAccount