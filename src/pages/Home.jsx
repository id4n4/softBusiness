import { Button, Card, CardBody, CardHeader } from '@nextui-org/react'
import Atropos from 'atropos/react'
import logoEFactura from '../assets/img/e_factura.png'
import logoOneSoft from '../assets/img/oneSoft.png'
import { FaInfo } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { PATH_FACTURA, PATH_ONE_SOFT } from '../routes/BrowserRoutes'

export const Home = () => {
  const navigate = useNavigate()
  return (
    <section className='flex justify-center flex-col'>
      <div className='relative flex flex-col gap-4 md:flex-row justify-evenly'>
        <Atropos
          activeOffset={40}
          shadowScale={1.05}
        >
          <Card className='py-4 max-w-sm'>
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-start gap-2'>
              <p className='text-tiny uppercase font-bold'>e_Factura</p>
              <small className='text-default-500'>Plataforma web que presta el servicio de gestión de facturación electrónica.</small>
              <Button
                variant='light'
                color='primary'
                size='sm'
                endContent={<FaInfo />}
                onClick={() => navigate(PATH_FACTURA)}
                className='self-end'
              >
                Conoce más
              </Button>
            </CardHeader>
            <CardBody className='overflow-visible py-2'>
              <figure><img src={logoEFactura} alt='eFactura' className='w-40 m-auto' /></figure>
            </CardBody>
          </Card>
        </Atropos>
        <Atropos
          activeOffset={40}
          shadowScale={1.05}
        >
          <Card className='py-4 max-w-sm '>
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-start gap-2'>
              <p className='text-tiny uppercase font-bold'>OneSoft</p>
              <small className='text-default-500'>Aplicación diseñada para una gerencia integral de todo el Talento humano y de nómina</small>
              <Button
                variant='light'
                color='primary'
                size='sm'
                endContent={<FaInfo />}
                onClick={() => navigate(PATH_ONE_SOFT)}
                className='self-end'
              >
                Conoce más
              </Button>
            </CardHeader>
            <CardBody className='overflow-visible py-2'>
              <figure><img src={logoOneSoft} alt='eFactura' className='w-40 m-auto' /></figure>
            </CardBody>
          </Card>
        </Atropos>
      </div>
    </section>
  )
}
