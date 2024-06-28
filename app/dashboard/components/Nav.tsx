'use client'


import { Container } from "@mui/material";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { label: 'Tecnológicos'
    , route: '/dashboard/mediosBasicos/tecnologico', 
      id: 1
  },
    {
      label: 'Mobiliarios',
      route: '/dashboard/mediosBasicos/mobiliario',
      id: 2
  },
    { label: 'Útiles',
      route: '/dashboard/mediosBasicos/utiles', 
      id: 3
  },
//   { label: 'Añadir Responsable'
//   , route: '/dashboard/mediosBasicos/tecnologico', 
//     id: 4
// },
//   {
//     label: 'Asignar Local',
//     route: '/dashboard/mediosBasicos/mobiliario',
//     id: 5
// },
//   { label: 'Mostrar Responsable',
//     route: '/dashboard/mediosBasicos/utiles', 
//     id: 6
// },
      
  ];

export function Nav(){
const pathname = usePathname();

    return(
        <Container 
        className="flex md:flex-col flex-row md:justify-start justify-evenly"
        >
              {links.map(({ label, route, id }) => (
                  <Link
                  key={label}
                  className={`${pathname == route? ' text-white': ''} flex gap-2  justify-start 
                  my-2 w-full rounded-md bg-gray-500 p-4 hover:bg-slate-400 hover:text-white`}
                  href={route}
                  >
                    <Image
                    src={`${label == 'Tecnológicos'? '../../producto-tecnologico.png': ''}
                          ${label == 'Mobiliarios'? '../../muebles.png': ''}
                          ${label == 'Útiles'? '../../libro.png': ''}
                          ${label == 'Añadir Responsable'? '../../agregar-usuario.png': ''}
                          ${label == 'Asignar Local'? '../../asignar.png': ''}
                          ${label == 'Mostrar Responsable'? '../../mostrar.png': ''}`}
                    alt="Image nav"
                    width={25}
                          />
                    {label}
                  </Link>
              ))}
        </Container>
    )
}