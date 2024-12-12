'use client'

import { Entry } from "../interface/entry";
import { EntriesState } from "./EntriesProvider";



type EntriesActionType =
    | { type: '[Entry] -Add-Entry', payload: Entry }
    | { type: '[Entry] -Entry-Update', payload: Entry, cantidad: number }
    | { type: '[Entry] -Entry-Delete', payload: Entry, indice: number }
    | { type: '[Entry] -Search-Entry-Update', payload: Entry[], cadena: string }
    | { type: '[Entry] -initial-entries', payload: Entry[] }


export function EntriesReducer(state: EntriesState, action: EntriesActionType) {
    switch (action.type) {
        case '[Entry] -initial-entries':
        return { entries: action.payload }; // Asume que action.payload es el nuevo estado de entradas
  
        case '[Entry] -Add-Entry':
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
        case '[Entry] -Entry-Update':
            return {
                ...state,
                entries: state.entries.map(entry => {
                    if (entry._id === action.payload._id) {
                        entry.status = action.payload.status
                        entry.description = action.payload.description
                        entry.cant = action.cantidad
                    }
                    return entry
                })
            }
        case '[Entry] -Entry-Delete':
            return {
                ...state,
                entries: state.entries.map(entry => {
                    if (entry.description === action.payload.description) {
                        state.entries.splice(action.indice, 1)
                    }
                    return entry
                })
            }
        case '[Entry] -Search-Entry-Update':
                 return {
                    ...state,
                    entries: action.payload.filter(entry => entry.description.includes(`${action.cadena}`))
                 }

        default:
            return state;
    }
}