import { apiUrl } from '../utils/constants'
import api from './index'

export const Login = async (data) => await api.post(`${apiUrl.login}`, data)