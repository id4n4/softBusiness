import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BrowserLayout } from '../layouts/BrowserLayout'
import { Home } from '../pages/Home'

export const PATH_HOME = '/'
export const PATH_ABOUT = '/about'
export const PATH_FACTURA = '/e-factura'
export const PATH_ONE_SOFT = '/one-soft'
export const PATH_SOPORTE = '/soporte'

export const BrowserRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BrowserLayout />}>
          <Route path={PATH_HOME} element={<Home />} />
          <Route path={PATH_ABOUT} element={<h1>Nuestra empresa</h1>} />
          <Route path={PATH_FACTURA} element={<h1>E_factura</h1>} />
          <Route path={PATH_ONE_SOFT} element={<h1>OneSoft</h1>} />
          <Route path={PATH_SOPORTE} element={<h1>Soporte Técnico</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
