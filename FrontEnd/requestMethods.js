import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTkyOTFkNzNhMmJmMzcwMGI3NmVhYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODY3NDU2NywiZXhwIjoxNjM4OTMzNzY3fQ.-joJ4FNAvdaHGrU2jlKW6jR40QgApaJ9xtAYP-7N-4Q"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});