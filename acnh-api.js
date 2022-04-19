const { default: axios } = require("axios")



const callApi = (endpoint) =>{
    return axios.get(`https://api.nookipedia.com/nh/${endpoint}`,{
        headers: {
            'X-API-KEY': process.env.ACNH_API_KEY,
            'Accept-Version':'1.5.0'
        }
       
    })
}

const getFish = () => {
    return callApi('fish')
}
const getSea = () => {
    return callApi('sea')
}
const getBugs = () => {
    return callApi('bugs')
}

exports.acnhApi = { getFish,getSea,getBugs } //