import axios from "axios";
const BASE_url = "http://localhost:8080";
const api = axios.create({
    baseURL: BASE_url
})

export const addUser = async (user) => {
    try{
        const response = await api.post('/create', user);
        console.log("Registration Successfull");
        return response;
    } catch(error){
        console.error("Error while Registering" , error);
    }
}
export const addUser1 = async (user) => {
    try{
        const response1 = await api.post('/tourSpot', user);
        console.log("Booking Successfull");
        return response1;
    } catch(error){
        console.error("Error while Booking" , error);
    }
}
 
export const addUser2 = async (user) => {
    try{
        const response2 = await api.post('/staySpot', user);
        console.log("Booking Successfull");
        return response2;
    } catch(error){
        console.error("Error while Booking" , error);
    }
}
 
export const getUser = async () => {
    try {
        const response = await api.get('/Get');
        console.log("Login Successful");
        return response.data; 
    } catch (error) {
        console.error("Login not successful", error);
        throw error; 
    }
}
