import { createReducer } from "@reduxjs/toolkit";
import user_actions from "../actions/users";
<<<<<<< HEAD
const { read_6_users, signin, signin_token } = user_actions
=======
const { read_6_users,signin } = user_actions
>>>>>>> bfe0ad2acf3e70489e9bb71bb4a55fbe86762593

const initial_state = {
    users: [],
    user: {},
    token: ''
}

const user_reducer = createReducer(
    initial_state,
<<<<<<< HEAD
    build => build.addCase(
        read_6_users.fulfilled,
        (state, action) => {
=======
    build=> build.addCase(
        read_6_users.fulfilled,
        (state,action)=> {
>>>>>>> bfe0ad2acf3e70489e9bb71bb4a55fbe86762593
            let new_state = {
                ...state,
                users: action.payload.users
            }
            return new_state
        }
    ).addCase(
        signin.fulfilled,
<<<<<<< HEAD
        (state, action) => {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
            return new_state
        }
    ).addCase(
        signin_token.fulfilled,
        (state, action) => {
=======
        (state,action)=> {
>>>>>>> bfe0ad2acf3e70489e9bb71bb4a55fbe86762593
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
            return new_state
        }
    )
)

export default user_reducer