import axios from "./axios"

export const getMatchesRequest = () => axios.get("/matches");

export const getMatchRequest = (id) => axios.get(`/matches/${id}`);

export const createMatchRequest = (match) => axios.post(`/matches`, match);

export const updateMatchRequest = (match) =>
    axios.put(`/matches/${match._id}`, match);

export const deleteMatchRequest = (id) => axios.delete(`/matches/${id}`);
