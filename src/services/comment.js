import { apiUrl } from '../utils/constants'
import api from './index'

export const CreateComment = async (data) => await api.post(`${apiUrl.comment}`, data)
export const GetAllComment = async (params) => await api.get(`${apiUrl.comment}`, { params })
export const GetSingleComment = async (id) => await api.get(`${apiUrl.comment}/${id}`)
export const UpdateComment = async (id, data) => await api.put(`${apiUrl.comment}/${id}`, data)
export const DeleteComment = async (id) => await api.delete(`${apiUrl.comment}/${id}`)