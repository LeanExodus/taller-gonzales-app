
import type { NextPage } from 'next'


import { Layout } from '../components/layouts'
import { MainImage } from '../components/ui';
import { ServicesMain } from '../components/servicios';
import { OfertGrid } from '../components/ofertas';





const Home: NextPage = () => {
  return (
    <Layout>
      
      
            
     <MainImage/>

     <OfertGrid />

     <ServicesMain/>

     

    </Layout>
  )
}

export default Home
