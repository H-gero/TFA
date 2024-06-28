'use client'

import { DragEvent, useContext, useMemo } from "react";
import { EntryState, EntryStatus } from "../interface/entry"
import { EntriesContext } from "../entries/EntriesContext";
import { List, Paper } from "@mui/material";
import EntryCard from "./EntryCard";
import { UIContext } from "../ui/UIContext";

interface Props {
    status: EntryStatus;
    state: EntryState;
}

export default function EntryList({ status, state }: Props) {
    const {entries, updateEntry} = useContext(EntriesContext)

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status && entry.state === state), [entries]);
    
    const { isDragging, endDragging } = useContext(UIContext);

    const onDrop = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text');
        const entry = entries.find(e => e._id === id)!;
        entry.status = status
        updateEntry(entry, entry.cant);
        console.log(entry);
        endDragging()
    }
    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault()  
    }

    return (
        <div 
        className={`${isDragging ? 'bg-gray-300': ''} fadeIn h-full`}
        onDrop={onDrop}
        onDragOver={allowDrop}
        >
            
            <Paper sx={{ height: 'calc(100vh-180px)'}}>
                <List sx={{backgroundColor: 'darkgray', opacity: isDragging ? 0.4: 1, transition: 'all .3s'}}
                >
                    {
                        entriesByStatus.map(entry => (
                            <EntryCard key={entry._id} entry={entry} />
                        ))
                    }
                </List>
            </Paper>
        </div>
    )
}