import { createContext } from "react";
import { Entry, EntryState, EntryStatus } from "../interface/entry";


export interface ContextProps {
    entries: Entry[];

    addNewEntry: (description: string, state: EntryState, cantidad: number) => void
    updateEntry: (entry: Entry, cant: number) => void
    deleteEntry: (entry: Entry, index: number) => void
    SearchUpdate: (cad: string, entries: Entry[]) => void
}

export const EntriesContext = createContext({} as ContextProps);