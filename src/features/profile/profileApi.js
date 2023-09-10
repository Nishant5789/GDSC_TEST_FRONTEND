import axios from 'axios'

export function fetchProFileById(profileId) {
     return axios.get(`http://localhost:8080/products/${profileId}`);
}

export function getProfileById() {
    return axios.get(`http://localhost:8080/order/${getUserId()}`);
}
export function updateOrder(updateOrderField, orderId) {
    return axios.patch(`http://localhost:8080/order/${orderId}`, updateOrderField);
}
export function removeOrder(orderId) {
    return axios.delete(`http://localhost:8080/order/${orderId}`);
}
