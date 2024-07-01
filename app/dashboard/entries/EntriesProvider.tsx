'use client'

import { Entry, EntryState } from "../interface/entry";
import { EntriesContext } from "./EntriesContext";
import { useEffect, useReducer } from "react";
import { EntriesReducer } from "./EntriesReducer";
import { getEntry } from "../actions/services/getEntry";
import { parseEntry } from "../utils/parseEntry";
import { changeEntry } from "../actions/services/changeEntry";


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
                const parsedData = parseEntry(data); 
                dispatch({ type: '[Entry] -initial-entries', payload: parsedData.entries });
            })
            .catch(error => {
                console.error('Error al cargar las entradas:', error);
            });
    }, []);

     const addNewEntry = async (description: string, state: EntryState, cantidad: number) => {
       
        const data = await changeEntry('api/entries/', { cant: cantidad, description, state: state })
        const parsedData = parseEntry([data])
        dispatch({ type: '[Entry] -Add-Entry', payload: parsedData.entries[0] })

    }

    const updateEntry = async(entry: Entry, cant: number) => {
        await changeEntry(`api/entries/${entry._id}/`, { cant: cant, status: entry.status },"PATCH")
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

