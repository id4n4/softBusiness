import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, Switch } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'
import { PATH_ABOUT, PATH_FACTURA, PATH_HOME, PATH_ONE_SOFT, PATH_SOPORTE } from '../routes/BrowserRoutes'
import logo from '../assets/img/logo_softbusiness_blanc.png'

const CLARO = 'light'
const OSCURO = 'dark'

export const Header = () => {
  const { theme, setTheme } = useTheme()
  const changeTheme = () => {
    setTheme(theme === CLARO ? OSCURO : CLARO)
  }
  const { pathname: location } = useLocation()
  const navigate = useNavigate()
  return (
    <section>
      <Navbar className='dark'>
        <NavbarBrand>
          {/* <p className='font-bold text-inherit'>SOFTBUSINESS S.A.S</p> */}
          <figure>
            <img src={logo} alt='logo' />
          </figure>
        </NavbarBrand>
        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <NavbarItem isActive={location === PATH_HOME}>
            <Button variant={location === PATH_HOME ? 'solid' : 'light'} onClick={() => navigate(PATH_HOME)}>Inicio</Button>
          </NavbarItem>
          <NavbarItem isActive={location === PATH_ABOUT}>
            <Button variant={location === PATH_ABOUT ? 'solid' : 'light'} onClick={() => navigate(PATH_ABOUT)}>Nuestra Empresa</Button>
          </NavbarItem>
          <NavbarItem isActive={location === PATH_FACTURA}>
            <Button variant={location === PATH_FACTURA ? 'solid' : 'light'} onClick={() => navigate(PATH_FACTURA)}>E_factura</Button>
          </NavbarItem>
          <NavbarItem isActive={location === PATH_ONE_SOFT}>
            <Button variant={location === PATH_ONE_SOFT ? 'solid' : 'light'} onClick={() => navigate(PATH_ONE_SOFT)}>OneSoft</Button>
          </NavbarItem>
          <NavbarItem isActive={location === PATH_SOPORTE}>
            <Button variant={location === PATH_SOPORTE ? 'solid' : 'light'} onClick={() => navigate(PATH_SOPORTE)}>Soporte Técnico</Button>

          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem>
            <Switch
              defaultSelected
              size='sm'
              color='secondary'
              onChange={changeTheme}
              isSelected={theme === CLARO}
              startContent={<BsFillSunFill />}
              endContent={<BsFillMoonFill />}
            />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </section>
  )
}
