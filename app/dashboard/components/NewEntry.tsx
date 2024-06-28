'use client'

import { Button, Box, TextField, } from "@mui/material";
import { ChangeEvent, useContext, useState } from "react";
import SaveIcon from '@mui/icons-material/Save';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { EntriesContext } from "../entries/EntriesContext";
import { EntryState, EntryStatus } from "../interface/entry";
import Swal from 'sweetalert2'
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";


export interface Props{
    state: EntryState;
}

export function NewEntry({state}: Props){

    const {entries, updateEntry} = useContext(EntriesContext)

    const {addNewEntry} = useContext(EntriesContext);

    const [isAdding, setisAdding] = useState(false);

    const [inputValue, setinputValue] = useState({
        entry: '',
        cant: 0
    });
    const {entry, cant} = inputValue

    const [touched, setTouched] = useState(false);


    const onTextFieldChanges = ({target}: Params) => {
        setinputValue({
            ...inputValue,
            [target.name]: target.value
        })
    }


    const onSave = () => {
        if(entry.length === 0 && cant === 0) return;
        if(cant > 10000 || cant < 1) return;
        const res = entries.find(en => en.description === entry)
        if(res){ return(
            Swal.fire({
                title: "Alert",
                text: "The element to be entered already exists. You want to update the quantity",
                icon: "warning",
                showCancelButton: true,
                cancelButtonColor: "#d33",
                confirmButtonColor: "#3085d6",
                confirmButtonText: 'Yes update it!',
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {  
                  updateEntry(res, cant)
                  setinputValue({
                    entry: '',
                    cant: 0
                  });
                  setisAdding(false)
                  setTouched(false);
                }
              }))
            }
       addNewEntry(entry, state, cant); 
       setinputValue({
        entry: '',
        cant: 0
      });
       setisAdding(false);
       setTouched(false);
    }

    const onClose = () => {
        if(entry.length === 0 && cant === 0) 
            return( 
              setisAdding(false),
              setinputValue({
                entry: '',
                cant: 0
              }),
              setTouched(false));

        Swal.fire({
            title: "Are you sure?",
            text: "If you continue, all entries will be deleted",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              setisAdding(false);
              setinputValue({
                entry: '',
                cant: 0
              });
              setTouched(false);
            }
          });
    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 1, width: '100%'}}>
        {
            isAdding ? (
                <>
                <TextField
                fullWidth
                sx={{ marginTop: 2, marginBottom: 1}}
                placeholder="Nueva Entrada"
                autoFocus
                multiline
                label='Nueva Entrada'
                helperText={entry.length <= 0 && touched && 'Ingrese un medio'}
                error={entry.length <= 0 && touched}
                value={entry}
                name="entry"
                onChange={onTextFieldChanges}
                onBlur={() => setTouched(true)}
            />
                <TextField
                type="number"
                placeholder="Cantidad"
                label='Nueva Cantidad'
                helperText={cant <= 0 && touched && 'Ingrese una cantidad'|| cant > 10000 && touched && 'Ingrese una cantidad mas pequeña'}
                error={cant <= 0 && touched || cant > 10000 && touched}
                value={cant}
                name="cant"
                onChange={onTextFieldChanges}
                onBlur={() => setTouched(true)}
                sx={{margin: 2}}
            />
            <Box display='flex' justifyContent='space-between' flexDirection='row' gap={1}>
                <Button
                    variant="contained"
                    onClick={onClose}
                    className="bg-slate-100 button"
                >
                    Cancelar
                </Button>

                <Button
                    variant="contained"
                    endIcon={<SaveIcon/>}
                    onClick={onSave}
                    className="button"
                >
                    Guardar
                </Button>
            </Box>
                </>
            ) : 
            (
                <Button
                startIcon={<AddCircleOutlineIcon />}
                fullWidth
                variant="contained"
                onClick={() => setisAdding(true)}
                sx={{borderColor: 'black', color: 'black'}}
            >
                Agregar Medio
            </Button>
            )
        }
        </Box>
    )
}