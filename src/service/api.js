import axios from 'axios';

const URL = 'http://localhost:8000';

export const addUser = async (data) => {//this is a asynchronous request
    try {
        return await axios.post(`${URL}/add`,data); 
    } catch (error) {
        console.log('Error while calling Add User api ', error);
    } 
    
}