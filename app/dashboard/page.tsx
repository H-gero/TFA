
import Link from 'next/link';


export default function Home() {
  const nombre = 'Nombre apellidos';
  return (
    <section className='right-section' >
      <div className="w-80 bg-slate-500 bg-opacity-40 right-section-name flex flex-col justify-center">
        <label htmlFor="name">{`Nombre: ${nombre}`}</label>
          <Link
            key={123}
            href='/dashboard/mensaje'
            className='hover:text-white'
            >
            Reportar
          </Link>
      </div>
    </section>
  )
}
