import type { NextPage } from 'next'

import { Layout } from '../../components/layouts';
import { CreateOfert } from '../../components/ofertas';




const CrearOferta: NextPage = () => {


    return (
        <>
            <Layout title='Agregar Oferta - Taller Gonzales'>
                <CreateOfert />
            </Layout>
        </>
    )
}

export default CrearOferta