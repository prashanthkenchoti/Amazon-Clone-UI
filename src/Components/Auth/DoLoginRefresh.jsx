import axios from 'axios';
import React from 'react'
import { Navigate } from 'react-router-dom';

const DoLoginRefresh = () => {
    const URL = "http://localhost:8080/api/v1/refreshlogin";
    const refresh=async() => {
     const response =  axios.post(URL,{
            withCredentials:true
        });
        if(response===200){
            //set data to the local storage
            return response.data.data;
        }
        else{
            // handle error
        }
    }

    const validateAndRefresh =async() =>{
    const userString= localStorage.getItem("user");
    if(user && user!=="{}"){
        const user =JSON.parse(userString);
        if(new Date(user.refreshExpiration)> new Date()){
            if(new Date(user.accessExpiration)> new Date()) {
                return user;

            }else return await refresh()
        }//Navigate("/login")
    }//navigate("/")
};
  return (
    <div>
      
    </div>
  )
}

export default DoLoginRefresh
