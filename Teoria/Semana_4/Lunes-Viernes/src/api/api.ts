import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, //Usamos la variable de entorno para configurar la URL base (VITE para pasarselo al cliente)
})