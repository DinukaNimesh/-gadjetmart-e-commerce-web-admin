import axios from "axios";
import {
    baseURL,
    createOrderURL, editSupplierURL, getAllOrderByDateRangeURL, getOrderByUserEmailURL,
    getProductsURL,
    getSuppliersURL,
    getUserURL,
    loginURL,
    signUpURL,
    updateUserURL
} from "./urlConfig";
import {showFailedToast, showSuccessToast} from "./showToast";

// ** AUTH
export const signInApiHandler =  async ({email, password}) => {
    let url = baseURL + loginURL
    try {
        let response = await axios.post(url, {
            email: email,
            password: password
        });

        return response;
    } catch (e) {
        showFailedToast("Internal Server Error - code [500]");
    }
}


// ** COMPANY
export const getSupplierApiHandler = async () => {
    let url = baseURL + getSuppliersURL;
    try {
        let token = await localStorage.getItem('token');

        let response = await axios.get(url,  { headers: {"Authorization" : `Bearer ${JSON.parse(token)}`} });
        return response;
    } catch (e) {
        showFailedToast("Internal Server Error - code [500]");
    }
}



// ** ADMIN
export const getOrderByDateRangeApiHandler = async ({startDate, endDate}) => {
    let url = baseURL + getAllOrderByDateRangeURL + startDate + '/' + endDate;
    try {
        let token = await localStorage.getItem('token');
        let response = await axios.get(url,  { headers: {"Authorization" : `Bearer ${JSON.parse(token)}`} });
        return response;
    } catch (e) {
        showFailedToast("Internal Server Error - code [500]");
    }
}

export const ediSupplierApiHandler =  async ({id, name, state, endpoint}) => {
    let url = baseURL + editSupplierURL
    try {
        let token = await localStorage.getItem('token');
        let response = await axios.post(url, {
            id: id,
            name: name,
            state: state,
            url: endpoint
        },
            { headers: {"Authorization" : `Bearer ${JSON.parse(token)}`} });

        return response;
    } catch (e) {
        showFailedToast("Internal Server Error - code [500]");
    }
}
