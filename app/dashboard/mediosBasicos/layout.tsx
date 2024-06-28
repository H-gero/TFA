
import Search from "../components/Search";


export default function LayoutMedioBasico({children}: Readonly<{
  children: React.ReactNode;
}>) { 
    return (
          <div className='right-section'>
            <Search placeholder="Search....."/>
            {children}
          </div>
    );
  }
  
  