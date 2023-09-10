import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export const BrowserLayout = () => {
  return (
    <section className='w-full h-full bg'>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </section>
  )
}
