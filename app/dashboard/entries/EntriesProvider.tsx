'use client'

import { Entry, EntryState, EntryStatus } from "../interface/entry";
import { EntriesContext } from "./EntriesContext";
import { useEffect, useReducer } from "react";
import { EntriesReducer } from "./EntriesReducer";
import { getEntry } from "../actions/services/getEntry";
import { parseEntry } from "../utils/parseEntry";


export interface EntriesState {
    entries: Entry[];
}





export default function EntriesProvider({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const [state, dispatch] = useReducer(EntriesReducer, { entries: [] }); // Estado inicial vacío o mínimo necesario

    useEffect(() => {
      getEntry('api/entries/')
       .then((response) => {
          const data = response;
          
          if (Array.isArray(data)) {
            const parsedData = parseEntry(data); // Asume que parseEntry devuelve un objeto con la estructura correcta para tu estado
            dispatch({ type: '[Entry] -initial-entries', payload: parsedData.entries });
          } else {
            console.error('La respuesta no es un array:', data);
          }
        })
       .catch(error => {
          console.error('Error al cargar las entradas:', error);
        });
    }, []);

    const addNewEntry = (description: string, state: EntryState, cantidad: number) => {
        const newEntry: Entry = {
            _id: '7',
            cant: cantidad,
            description,
            createAt: Date.now(),
            status: 'Bien',
            state: state
        }

        dispatch({ type: '[Entry] -Add-Entry', payload: newEntry })
    }

    const updateEntry = (entry: Entry, cant: number) => {
        dispatch({ type: '[Entry] -Entry-Update', payload: entry, cantidad: cant })
    }

    const deleteEntry = (entry: Entry, index: number) => {
        dispatch({ type: '[Entry] -Entry-Delete', payload: entry, indice: index })
    }
    const SearchUpdate = (cad: string, entries: Entry[]) => {
        dispatch({ type: '[Entry] -Search-Entry-Update', cadena: cad, payload: entries })
    }
    return (
        <EntriesContext.Provider value={
            {
                ...state,
                addNewEntry,
                updateEntry,
                deleteEntry,
                SearchUpdate,
            }
        }>
            {children}
        </EntriesContext.Provider>
    )
}

