import axios from "axios";

const URL = "http://localhost:4000/api"

export const getContacts = ( setState ) => {
  axios.get(`${URL}/contacts`)
    .then((response) => setState(response.data))
    .catch((error) => console.log(error));
}

export const getContact = ( setState, id ) => {
  axios.get(`${URL}/contact/${id}`)
    .then((response) => setState(response.data))
    .catch((error) => console.log(error));
}

export const createContact = ( data ) => {
  axios.post(`${URL}/contact/create`, data)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}

export const deleteContact = ( id ) => {
  axios.delete(`${URL}/contact/delete/${id}`)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}