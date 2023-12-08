import { Footer } from './_components/Footer'
import { LandingPageInfo } from './_components/LandingPageInfo'
import { NavBar } from './_components/NavBar'

export default function Home() {
  return (
    <div className='relative'>
      <NavBar/>
      <LandingPageInfo/>
      <Footer/>
    </div>
  )
}
