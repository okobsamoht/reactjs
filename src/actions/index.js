import axios from "axios";
import {DeviceUUID} from "device-uuid"

//axios interceptors
axios.interceptors.request.use(function (config) {
    config.headers.deviceUUID = new DeviceUUID().get();
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

//actions
export function addArticle(payload) {
    return {type: "ADD_ARTICLE", payload}
}
export function doSomething(payload) {
    return {type: "DO_SOMETHING", payload}
}
export function getData() {
    return function (dispatch) {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(json => {
                dispatch({type: "DATA_LOADED", payload: json.data});
                //window.location = 'https://google.com';
            });
    };
}
