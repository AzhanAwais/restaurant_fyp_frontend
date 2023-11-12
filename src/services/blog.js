import { apiUrl } from '../utils/constants'
import api from './index'

export const CreateBlog = async (data) => await api.post(`${apiUrl.blog}`, data)
export const GetAllBlog = async (params) => await api.get(`${apiUrl.blog}`, { params })
export const GetSingleBlog = async (id) => await api.get(`${apiUrl.blog}/${id}`)
export const UpdateBlog = async (id, data) => await api.put(`${apiUrl.blog}/${id}`, data)
export const DeleteBlog = async (id) => await api.delete(`${apiUrl.blog}/${id}`)