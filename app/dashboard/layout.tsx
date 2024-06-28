import { Nav } from "./components/Nav";
import { Link } from "@nextui-org/react";
import { LogOut } from "./components/LogOut";


export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="imageC">
              <div className="flex gap-2 py-4 fadeIn md:flex-row flex-col md:h-screen h-full" >

                <div className="md:flex md:flex-col flex-row left-section mx-4 w-[100vh] min-w-full md:min-w-[30%] md:justify-start justify-between align-bottom">
                  <div className='md:bg-slate-500 h-1/5 md:w-full w-[100vh] left-section-logo' >
                    <Link className="hover:text-white" href={'/'}>ACtivos Fijos Tangibles</Link>
                  </div>
                  <div className="flex md:flex-col flex-row justify-between h-full md:w-full w-[100vh] md:px-0 px-3">
                    <div className='md:h-1/2 md:w-full w-[75%] h-full'>
                      <Nav />
                    </div>

                    <div className="md:w-full w-[25%] flex flex-row justify-center ">
                      <LogOut/>
                    </div>
                  </div>
                </div>
                {children}
              </div>
      </div>
  );
}

