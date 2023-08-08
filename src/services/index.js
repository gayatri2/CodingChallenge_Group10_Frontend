import axios from "axios";


const API_URL = "http://localhost:8081/api/v1";

const getAllSecurities = async () => {
    const ans =  await axios.get(`${API_URL}/getAllSecurities`);
    return ans.data;

}

const getSecurityById = async (id) => {
    await axios.get(`${API_URL}/getSecurityById/${id}`)
        .then((response) => {
            return response.data;
        })
}

const getSecurityByUserId = async (userid) => {
    await axios.get(`${API_URL}/getSecurityByUserId/${userid}`)
        .then((response) => {
            return response.data;
        })
}

const getSecurityByDateRange = async (fromDate, toDate) => {
    await axios.get(`${API_URL}/getSecurityByDateRange/${fromDate}/${toDate}`)
        .then((response) => {
            return response.data;
        })
}

const getTradesBySecurityId = async (securityid) => {
    await axios.get(`${API_URL}/getTradesBySecurityId/${securityid}`)
        .then((response) => {
            return response.data;
        })
}


const SecurityService = {
    getAllSecurities,
    getSecurityById,
    getSecurityByUserId,
    getSecurityByDateRange,
    getTradesBySecurityId
}


export default SecurityService;