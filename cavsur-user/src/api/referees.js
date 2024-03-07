import axios from "./axios"

export const getRefereesRequest = () => axios.get("/referees");

export const getRefereeRequest = (id) => axios.get(`/referees/${id}`);

export const createRefereeRequest = (referee) => axios.post(`/referees`, referee);

export const updateRefereeRequest = (referee) =>
    axios.put(`/referees/${referee._id}`, referee);

export const deleteRefereeRequest = (id) => axios.delete(`/referees/${id}`);