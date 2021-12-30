import { loginFaliure, loginStart, loginSuccess, registerFaliure, registerStart, registerSuccess } from "./userRedux";
import { publicRequest } from '../requestMethod'
// import axios from "axios";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post('/auth/login/', user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFaliure())
    }
}

export const register = async (dispatch, user) => {
    dispatch(registerStart());
    try {
        const res = await publicRequest.post('/auth/register/', user)
        dispatch(registerSuccess(res.data))
    } catch (error) {
        dispatch(registerFaliure())
    }
}