import type { NextPage } from 'next'

import { Layout } from '../../components/layouts';


import { CreateService } from '../../components/servicios';



const CrearServicio: NextPage = () => {


    return (
        <>
            <Layout title='Agregar Servicio - Taller Gonzales'>
                <CreateService />
            </Layout>
        </>
    )
}

export default CrearServicio