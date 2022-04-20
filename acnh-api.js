const { default: axios } = require("axios")


const callApi = (endpoint) =>{
    return axios.get(`https://api.nookipedia.com/${endpoint}`,{ //had to remove nh/ from original request as the link for villagers didn't include it
        headers: {
            'X-API-KEY': process.env.ACNH_API_KEY,
            'Accept-Version':'1.5.0'
        }
       
    })
}

const getFish = () => {
    return callApi('nh/fish')
}
const getSea = () => {
    return callApi('nh/sea')
}
const getBugs = () => {
    return callApi('nh/bugs')
}

const getVillager = () =>{
    return callApi('villagers?game=nh&nhdetails=true')
}

exports.acnhApi = { getFish,getSea,getBugs,getVillager } //
