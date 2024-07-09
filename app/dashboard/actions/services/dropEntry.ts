"use server"
import { apiUrl } from "./const";


export async function dropEntry(url: string,token: string) {

    try {
        const options = {
            method: 'DELETE', // Método de la solicitud
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${token}`, //token de autenticación
            }
        };
        const response = await fetch(`${apiUrl + url}`, options);

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const json = await response.json(); // Espera a que la respuesta se convierta a JSON
      
        return json; // Retorna la respuesta convertida a JSON
    } catch (error) {
        console.error('Error al intentar eliminar:', error);
        throw error; // Puedes decidir si quieres lanzar el error nuevamente o manejarlo de otra manera
    }

}