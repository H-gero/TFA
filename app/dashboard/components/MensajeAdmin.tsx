'use client'

import { Button } from "@nextui-org/react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useEffect, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import './components.modules.css'
import { FormControl, FormGroup, TextField } from "@mui/material";



export function MensajeAdmin() {


  const [state, setState] = useState({
    name: '',
    email: '',
    text: ''
  })
  const { name, email, text } = state

  useEffect(() => {
    console.log('Hola');

  }, [state]);

  const [touched, setTouched] = useState(false);

  /* Extraje los params y lo desestructure para sacar el target*/
  const handleInputChange = ({ target }: Params) => {

    setState({
      ...state,
      [target.name]: target.value
    })
  }

  const handleInputClick = () => {
    if (state.name.length === 0 || state.email.length === 0 || state.text.length === 0) {
      setTouched(true);
      return
    };
    console.log(state);
    setState({
      name: '',
      email: '',
      text: ''
    })
    setTouched(false)

  }

  const handleSubmit = (e: Params) => {
    e.preventDefault()
  }

  return (
    <FormControl fullWidth focused margin="dense"
      onSubmit={handleSubmit}
    >
      <FormGroup row sx={{marginBottom: '5px', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column' }}
      className="md:flex-row md:w-full w-full gap-1"
      >
        <TextField
          type="text"
          name="name"
          label="Name"
          placeholder="Name"
          autoComplete="off"
          sx={{width: '45%'}}
          helperText={state.name.length <= 0 && touched && 'Ingrese un valor'}
          error={state.name.length <= 0 && touched}
          value={name}
          onChange={handleInputChange}
          className="bg-white w-full md:w-[49%]"
          onBlur={() => setTouched(true)}
        />

        <TextField
          type="email"
          name="email"
          label="Email"
          placeholder="Email@gmail.com"
          autoComplete="off"
          sx={{width: '45%'}}
          helperText={state.email.length <= 0 && touched && 'Ingrese un valor'}
          error={state.email.length <= 0 && touched}
          value={email}
          onChange={handleInputChange}
          className="bg-white w-full md:w-[49%]"
          onBlur={() => setTouched(true)}
        />
      </FormGroup>
      <TextField
        multiline
        fullWidth
        name="text"
        label="Description"
        placeholder="Enter your description"
        sx={{marginBottom: '5px'}}
        helperText={state.text.length <= 0 && touched && 'Ingrese un valor'}
        error={state.text.length <= 0 && touched}
        value={text}
        className="max-h-full text bg-white"
        onChange={handleInputChange}
        onBlur={() => setTouched(true)}
      />
      <Button
        className="Button hover:bg-slate-400 hover:text-white flex gap-2 items-center"
        onClick={handleInputClick}
      >
        <SendIcon fontSize="small" color="primary" />
        Send
      </Button>
    </FormControl>
  )
}
