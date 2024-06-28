'use client'

import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Entry } from "../interface/entry"
import { DragEvent, useContext, useState } from "react";
import { UIContext } from "../ui/UIContext";
import { EntriesContext } from "../entries/EntriesContext";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

interface Props {
    entry: Entry;
}

export default function EntryCard({ entry }: Props) {

    const {entries, deleteEntry, updateEntry} = useContext(EntriesContext)

    const [cant, setCant] = useState({ cantidad: entry.cant });

    const { cantidad } = cant;

    const { startDragging, endDragging } = useContext(UIContext);

    const onDragStart = (event: DragEvent) => {
        event.dataTransfer.setData('text', entry._id)
        startDragging();
    }
    const onDragEnd = (event: DragEvent) => {
        endDragging();
    }

    const handleClick = () => {
        const index = entries.findIndex(x => x.description === entry.description)
        deleteEntry(entry, index);
    }

    const Inc = () => {
        const res = entries.find(e => e.description === entry.description);
        setCant({
            ...cant,
            cantidad: cantidad + 1
        })
        updateEntry(res! ,cantidad + 1)   
    }
    const Dec = () => {
        if(cantidad === 1 ) {
        const index = entries.findIndex(x => x.description === entry.description)
        deleteEntry(entry, index);
        }
        const res = entries.find(e => e.description === entry.description);
        setCant({
            ...cant,
            cantidad: cantidad - 1
        })
        updateEntry(res! ,cantidad - 1)
    }


    return (
        <Card
            sx={{ marginBottom: 1, backgroundColor: 'lightgray', cursor: 'move', maxWidth: '768px'}}
            draggable={true}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >

            <CardContent sx={{ display: 'flex', width: '100%', alignItems: 'center'}}>
                <Typography sx={{ whiteSpace: 'pre-line', width: '75%' }}> {entry.description}</Typography>
                <Button
                    size="small"
                    onClick={handleClick}
                ><ClearIcon/></Button>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '5px', height: '30px', paddingBottom: '5px' }}>
                <CardActions sx={{ display: 'flex', justifyContent: 'start', paddingLeft: 2 }}>
                    <Typography variant="body2">{`Cant: ${cantidad}`}</Typography>
                </CardActions>
                <CardActions>
                    <Button
                        variant='contained'
                        size="small"
                        sx={{ minWidth: '20px', align: 'center' }}
                        onClick={Inc}
                    > {<AddIcon />}
                    </Button>

                    <Button
                        variant='contained'
                        size="small"
                        sx={{ minWidth: '20px' }}
                        onClick={Dec}
                    > {<RemoveIcon />}
                    </Button>
                </CardActions>
            </Box>
        </Card>
    )
}