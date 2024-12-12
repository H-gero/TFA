"use server"

import { apiUrl } from "./const";


export async function login(url = '', data: any ) {

    // Configura el objeto fetch con opciones
    const options = {
        method: 'POST', // Método de la solicitud
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    };



    try {
        const response = await fetch(apiUrl + url, options);

        if (!response.ok) {
            return {status:response.status}
        }
        const json = await response.json(); // Espera a que la respuesta se convierta a JSON
        
        return {json,status:response.status}; // Retorna la respuesta convertida a JSON

    } catch (error) {
        return {status:400}
    }

}