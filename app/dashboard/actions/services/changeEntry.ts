"use server"

import { apiUrl } from "./const";


export async function changeEntry(url = '', data: any, method = 'POST') {

    // Configura el objeto fetch con opciones
    const options = {
        method: method, // Método de la solicitud
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify(data)
    };



    try {
        const response = await fetch(apiUrl + url, options);

        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }
        const json = await response.json(); // Espera a que la respuesta se convierta a JSON
      
        return json; // Retorna la respuesta convertida a JSON
    } catch (error) {
        console.error('Error:', error); // Maneja cualquier error
    }

}