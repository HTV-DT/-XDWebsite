import axios from 'axios';
import { loginStart, loginSuccess, loginFailed, registerStart, registerSuccess, registerFailed } from '~/redux/authSlice';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('https://qlks.herokuapp.com/api/auth/signin', user);
        
        if(res.status === 202){
            dispatch(loginFailed());
            
        }else{
            dispatch(loginSuccess(res.data));
            navigate('/');
        }
    } catch (err) { 
        dispatch(loginFailed());
    }
};

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post('https://qlks.herokuapp.com/api/auth/signup', user);
        dispatch(registerSuccess());
        navigate('/danhsachtaikhoan');
    } catch (err) {
        dispatch(registerFailed());
    }
};

