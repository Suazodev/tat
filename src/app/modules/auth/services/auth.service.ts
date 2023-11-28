import axios from 'axios';
import { IUser } from '../../../shared/interfaces/user.interface';



export const registerUser = async (user: Partial<IUser>) => {
    const result = await axios.post('http://localhost:3000/user', user)
    return result
};

export const loginUser = async (user: Partial<IUser>) => {
    const result = await axios.post('http://localhost:3000/user/login', user)
    return result
};