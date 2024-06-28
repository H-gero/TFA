'use client'

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import LogoutIcon from '@mui/icons-material/Logout';
import { useEffect } from "react";


export function LogOut() {
    const router = useRouter();
    // useEffect(() => {
    //     router.push('/Login')
    //  }, [window.onbeforeunload])

    const handelClick = () =>{
    router.push('/login')
    }

    return (
        <>
            <Button variant="contained" sx={{marginBottom: '12px', color: 'black'}} className="button" onClick={handelClick}>
                <LogoutIcon/>
                LogOut
            </Button>
        </>
    )
}