import info from "../../../../services/info";
const user = JSON.parse( window.localStorage.getItem('userInfoAndToken') )

const data = async ()=>{
    const resulte  = user ? await info.getId(user.id) : 'resulte'
    console.log(resulte)
    return resulte
}   
export default data()