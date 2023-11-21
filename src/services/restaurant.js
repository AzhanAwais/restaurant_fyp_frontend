import { apiUrl } from '../utils/constants'
import api from './index'

export const getRestaurant = async (params) => api.get(`restaurant/search`,{params})
export const getRestaurantbyId = async (id) => api.get(`${apiUrl.restaurant}/${id}`)