'use client'

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import { useState } from "react";
import './components.modules.css'
import { Button, Card, CardActionArea, CardActions, CardContent, TextField, Typography } from "@mui/material";
import { Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { login } from "../actions/services/login";



export function Login() {

    let acept = false;

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(false);

    const { email, password } = credentials;


    const [touched, setTouched] = useState(false);

    const router = useRouter();

    const handleChange = ({ target }: Params) => {
        setCredentials({
            ...credentials,
            [target.name]: target.value
        })

    }
    // const handleInputClick = async () => {
    //     if (email === '' || password === '') {
    //         setTouched(true)
    //         return
    //     }
    //     setCredentials({
    //         email: '',
    //         password: ''
    //     })
        

    // }

    const handleSubmit = async (e: Params) => {
        e.preventDefault();
        const response = await login("auth/login/", credentials)
        
        if (response.status >= 400 ) {
            setError(true)
            return
        }
        localStorage.setItem('token', response.json.token)
        
    }

    return (
     <form onSubmit={handleSubmit} className="bg-white opacity-90">
         <CardActions sx={{height: '50%'}}>
             <Image
                 src="../../acceso.gif"
                 alt="acceso gif"
                 className="py-4 max-w-80"
                 style={{padding: '0'}}
             />
         </CardActions>
         <CardContent sx={{paddingBottom: '0', margin: '5px', height: '50%'}}>
             <CardContent sx={{height: '75%'}}>
                 <CardActions>
                     <TextField
                         type="email"
                         name="email"
                         placeholder="mail@gmail.com"
                         label='Correo'
                         helperText={email.length <= 0 && touched && 'Ingrese un correo'}
                         error={email.length <= 0 && touched}
                         value={email}
                         autoComplete="off"
                         autoFocus
                         fullWidth
                         onChange={handleChange}
                         onBlur={() => setTouched(true)}
                         sx={{}}
                     />
                 </CardActions>
                 <CardActions>
                     <TextField
                         type="password"
                         name="password"
                         placeholder="********"
                         label='Password'
                         helperText={password.length <= 0 && touched && 'Ingrese una contraseña'}
                         error={password.length <= 0 && touched}
                         value={password}
                         autoComplete="off"
                         fullWidth
                         onChange={handleChange}
                         onBlur={() => setTouched(true)}
                     />
                 </CardActions>
             </CardContent>
             <CardContent sx={{display: 'flex', justifyContent: 'center', margin: '6px', height: '25%', padding: '0'}}>
                <button
                className="button h-10 w-full transition-all duration-300"
                onClick={() => {
                    if(error === false){
                        Swal.fire({
                            title: "Success",
                            icon: "success",
                            confirmButtonColor: "#3085d6",
                            confirmButtonText: "Ok",
                          });
                        setTimeout(() => {
                            router.push('/dashboard')
                        }, 1000)
                    }else{
                        Swal.fire({
                            title: "Error",
                            text: 'Incorrect username or password',
                            icon: "error",
                            confirmButtonColor: "#3085d6",
                            confirmButtonText: "Ok",
                          });
                          setCredentials({
                            email: '',
                            password: ''
                          })
                    }
                }}
                >Login</button>
             </CardContent>
         </CardContent>
     </form>
        // <div>
        //     <form onSubmit={handleSubmit}>
        //         <TextField
        //             type="email"
        //             name="email"
        //             placeholder="mail@gmail.com"
        //             label='Correo'
        //             helperText={email.length <= 0 && touched && 'Ingrese un correo'}
        //             error={email.length <= 0 && touched}
        //             value={email}
        //             autoComplete="off"
        //             autoFocus
        //             fullWidth
        //             onChange={handleChange}
        //             onBlur={() => setTouched(true)}
        //         />
        //         <TextField
        //              type="password"
        //              name="password"
        //              placeholder="********"
        //              label='Password'
        //              helperText={password.length <= 0 && touched && 'Ingrese una contraseña'}
        //              error={password.length <= 0 && touched}
        //              value={password}
        //              autoComplete="off"
        //              fullWidth
        //              onChange={handleChange}
        //              onBlur={() => setTouched(true)}
        //          />
        //         <button>Login</button>
        //     </form>
        // </div>
    )
}