import { apiUrl } from '../utils/constants'
import api from './index'

export const GetDashboard = async () => await api.get(`${apiUrl.dashboard}`)