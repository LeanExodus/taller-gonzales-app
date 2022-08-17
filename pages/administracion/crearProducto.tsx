import type { NextPage } from 'next'

import { Layout } from '../../components/layouts';

import { CreateProduct } from '../../components/productos';



const CrearProducto: NextPage = () => {


    return (
        <>
            <Layout title='Agregar Producto - Taller Gonzales'>
                <CreateProduct/>
            </Layout>
        </>
    )
}

export default CrearProducto