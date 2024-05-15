import axios from "axios";

const API = axios.create({
  baseURL: "https://fitness-tracker-nc97.onrender.com/api/",
});

export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/login", data);

export const getDashboardDetails = async (token) =>
  API.get("/workout/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getWorkouts = async (token, date) =>
  await API.get(`/workout/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addWorkout = async (token, data) =>
  await API.post(`/workout/addworkout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
