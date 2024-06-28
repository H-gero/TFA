'use client'
import { UIContext } from "../ui/UIContext";
import { useContext } from 'react';
import { Typography } from "@mui/material";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';



export default function TopMenu() {
  const { openSideMenu } = useContext(UIContext)

  return (
    <>
      <div className='w-full bg-gray-500 p-4 rounded-sm bg-opacity-40 h-[7%] flex flex-row justify-between'>
        <div>
          <Link
            href="/"
          >
            <span className={`antialiased font-bold hover:text-white`}>Activos Fijos Tangibles</span>
          </Link>
        </div>
        <div className="flex flex-row h-full gap-1">
          <div className="flex flex-row gap-1">
            <Typography variant="subtitle1" sx={{lineHeight: 1.4}}>Click Aquí </Typography>
            <TrendingFlatIcon fontSize="medium" className="align-top"/>
          </div>
          <button
            className="rounded-md transition-all hover:bg-gray-100"
            onClick={openSideMenu}
          ><MenuIcon className="align-top" /></button>
        </div>
      </div>
      <div className='flex flex-col justify-between items-center h-[93%] p-4'>
        <Typography variant='h1' className="text-gray-800 font-semibold"
        sx={{borderStyle: 'solid', borderWidth: '1px', borderRadius:'20px', borderColor: 'black'}}
        >Bienvenido!!</Typography>
      </div>
    </>
  )
}

