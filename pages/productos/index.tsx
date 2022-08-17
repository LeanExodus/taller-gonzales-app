
import type { NextPage } from 'next'

import { Layout } from '../../components/layouts'
import { ProductGrid } from '../../components/productos';


const Productos: NextPage = () => {

    return (
        <>
            <Layout title='Productos - Taller Gonzales'>
               <ProductGrid/>
            </Layout>
        </>
    )
}

export default Productos
