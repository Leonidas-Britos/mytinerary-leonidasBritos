import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_6_users = createAsyncThunk(
     'read_6_users',
     async()=> {
          try {
               let users = await axios(apiUrl+'users')
               // console.log(users.data.response);
               console.log(users);
               return {
                    users: users.data.response
               }
          } catch (error) {
               console.log(error);
               users: []
          }
     }
)

const signin = createAsyncThunk(
     'signin',
     async(obj)=>{
         try {
             let data = await axios.post(apiUrl+'auth/signin',obj.data)
             console.log(data);
             localStorage.setItem('token',data.data.response.token)
             return {
                 user: data.data.response.user,
                 token: data.data.response.token
             }
         } catch (error) {
             console.log(error);
             return {
                 user: {},
                 token: ''
             }
         }
     }
 )

<<<<<<< HEAD
 const signin_token = createAsyncThunk(
    'signin_token',
    async()=> {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers:{ 'Authorization':`Bearer ${token}` } }
            let data = await axios.post(apiUrl+'auth/token',null,authorization)
            console.log(data);
            localStorage.setItem('token',data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: ''
            }
        }
    }
)

const user_actions = { read_6_users, signin, signin_token  }
=======

const user_actions = { read_6_users,signin  }
>>>>>>> bfe0ad2acf3e70489e9bb71bb4a55fbe86762593
export default user_actions;