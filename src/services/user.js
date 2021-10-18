import axios from "axios";
const baseUrl = '/api/user'

const loginUser = async (newLoginUserInfo) =>{
    const resulte = await axios.post(baseUrl, newLoginUserInfo)
    return resulte
}

export default loginUser