import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sandy-vid.herokuapp.com/api',
})

export const insertVideo = payload => api.post(`/video`, payload)
export const getAllVideos = () => api.get(`/videos`)
export const updateVideoById = (id, payload) => api.put(`/video/${id}`, payload)
export const deleteVideoById = id => api.delete(`/video/${id}`)
export const getVideoById = id => api.get(`/video/${id}`)
// export const getDatas=payload=>api.post(`/upload/image`,payload)

const apis = {
    insertVideo,
    getAllVideos,
    updateVideoById,
    deleteVideoById,
    getVideoById,
    // getDatas,
}

export default apis