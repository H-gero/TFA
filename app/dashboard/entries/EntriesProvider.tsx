'use client'

import { Entry, EntryState, EntryStatus } from "../interface/entry";
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext } from "./EntriesContext";
import { useReducer } from "react";
import { EntriesReducer } from "./EntriesReducer";


export interface EntriesState {
    entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            cant: 10,
            description: 'Laptop',
            status: 'Bien',
            createAt: Date.now(),
            state: 'Tecnológico'
        },
        {
            _id: uuidv4(),
            cant: 20,
            description: 'Sofa',
            status: 'Regular',
            createAt: Date.now() - 1000000,
            state: 'Mobiliario'
        },
        {
            _id: uuidv4(),
            cant: 40,
            description: 'Libreta',
            status: 'Mal',
            createAt: Date.now() - 100000,
            state: 'Útil'
        },
        {
            _id: uuidv4(),
            cant: 30,
            description: 'Torre',
            status: 'Regular',
            createAt: Date.now(),
            state: 'Tecnológico'
        },
        {
            _id: uuidv4(),
            cant: 60,
            description: 'Cama',
            status: 'Mal',
            createAt: Date.now() - 1000000,
            state: 'Mobiliario'
        },
        {
            _id: uuidv4(),
            cant: 100,
            description: 'Borrador',
            status: 'Bien',
            createAt: Date.now() - 100000,
            state: 'Útil'
        }
    ]
}

export default function EntriesProvider({ children }: Readonly<{
    children: React.ReactNode;
  }>){

    const [state, dispatch] = useReducer(EntriesReducer, ENTRIES_INITIAL_STATE);

    const addNewEntry = (description: string, state: EntryState, cantidad: number) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            cant: cantidad,
            description,
            createAt: Date.now(),
            status: 'Bien',
            state: state
        }

        dispatch({type: '[Entry] -Add-Entry', payload: newEntry})
    }

    const updateEntry = (entry: Entry, cant: number) => {
        dispatch({type: '[Entry] -Entry-Update', payload:entry , cantidad: cant })
    }

    const deleteEntry = (entry: Entry, index: number) => {
        dispatch({type: '[Entry] -Entry-Delete', payload: entry , indice: index})
    }
    const SearchUpdate = (cad: string, entries: Entry[]) => {
        dispatch({type: '[Entry] -Search-Entry-Update', cadena: cad, payload: entries})
    }
  return (
    <EntriesContext.Provider value={
        {...state,
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

