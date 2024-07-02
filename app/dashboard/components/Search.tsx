'use client'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import './components.modules.css'

import { Image } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';
import { useContext } from 'react';
import { EntriesContext } from '../entries/EntriesContext';




export default function Search({ placeholder }: { placeholder: string }) {

  const { SearchUpdate, entries, getEntries } = useContext(EntriesContext)
  //Search
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();


  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    if (!term) {
      params.delete('query');
      getEntries(); 
    } else {
      params.set('query', term);
      SearchUpdate(term, entries);
    }
    replace(`${pathname}?${params.toString()}`);

  }, 300)


  // useEffect(() => {
  //   setState({text: ''});

  // }, [pathname]);

  // useEffect(() => {
  //    replace(`${actual}`);
  // }, [window.onbeforeunload])

  return (
    <div className="relative flex flex-1 flex-shrink-0 pt-2 pr-2">
      <Image
        src="../../buscar.png"
        alt='Screenshots of the dashboard'
        width={50}
        className='scale-100'
      />
      <input
        name='text'
        type='search'
        onChange={(e) => { handleSearch(e.target.value) }}
        className=" block w-full rounded-md border 
            border-gray-200 py-[9px] pl-10 text-sm outline-2 
            placeholder:text-gray-500 opacity-50 input "
        placeholder={placeholder}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
}