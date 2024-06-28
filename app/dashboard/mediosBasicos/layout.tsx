
import { Suspense } from "react";
import Search from "../components/Search";


export default function LayoutMedioBasico({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='right-section'>
      <Suspense>
        <Search placeholder="Search....." />
      </Suspense>
      {children}
    </div>
  );
}

