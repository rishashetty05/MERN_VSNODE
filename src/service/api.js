import axios from 'axios';

const URL = 'http://localhost:8000';

export const addUser = async (data) => {//this is a asynchronous request
    try {
        return await axios.post(`${URL}/add`,data); 
    } catch (error) {
        console.log('Error while calling Add User api ', error);
    } 
    
}

export const getUsers = async () => {
    try {
        return await axios.get(`${URL}/all`); //returns promise
    } catch (error) {
        console.log('Error while calling getUsers API', error);
    }
}

export const getUser = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`); 
    } catch (error){
        console.log('Error while calling getUser API', error);
    }
}

export const editUser = async (user, id) => {
    try {
        return await axios.post(`${URL}/${id}`, user);
    } catch (error){
        console.log('Error while calling editUser API', error);
    }
}  

export const deleteUser = async(id) => {
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log('Error while calling deleteUser API', error);
    }
}