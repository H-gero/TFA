"use server";
import { apiUrl } from "./const";


// Función asíncrona para realizar la solicitud GET
export async function getEntry(url: string,token: string) {
    try {
        const options = {
            method: 'GET', // Método de la solicitud
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Token ${token}`, //token de autenticación
            }
        };
        const response = await fetch(apiUrl + url, options);


        // Verifica si la respuesta fue exitosa (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }

        // Parsea la respuesta como JSON
        const data = await response.json();
        // Aquí puedes manejar los datos recibidos
        
        return data;
    } catch (error) {
        console.error('Hubo un problema con la petición:', error);
        // Maneja cualquier error que pueda haber ocurrido durante la petición
        return null;

    }
}

