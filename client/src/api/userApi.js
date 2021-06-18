import axios from 'axios'
import { adminPassword } from '../mocks/mock'

export const isAdmin = async password => {
    // return await axios.post(`${process.env.REACT_APP_API_URL}api/user/login`, { password })
    return password === adminPassword ? { status: 200 } : { status: 400 }
}
