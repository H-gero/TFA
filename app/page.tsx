import './page.modules.css'
import SideMenu from './dashboard/components/SideMenu';
import TopMenu from './dashboard/components/TopMenu';


export default function Home() {

  return (
    <div>
    <section className="h-screen imageP" >
      <TopMenu />
      <SideMenu />
    </section>
    </div>
  )
}