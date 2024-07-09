'use client'

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from "../actions/services/logout";



export function LogOut() {
    const router = useRouter();
    // useEffect(() => {
    //     router.push('/Login')
    //  }, [window.onbeforeunload])

    const handelClick = async() => {
        const token = localStorage.getItem('token')
        if (!token) {
            return
        }
        const response = await logout('auth/logout/', {token})
        
        if (response.status >= 400) {
            return
        }
        localStorage.removeItem('token')
        router.push('/login')
    }

    return (
        <>
            <Button variant="contained" sx={{ marginBottom: '12px', color: 'black' }} className="button" onClick={handelClick}>
                <LogoutIcon />
                LogOut
            </Button>
        </>
    )
}