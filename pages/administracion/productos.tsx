import type { NextPage } from 'next'

import { Layout } from '../../components/layouts';
import { AdminProducts } from '../../components/productos';
import useRedirect from '../../components/hooks/usuario/useRedirect';


const AdminProductos: NextPage = () => {

    useRedirect()

    return (
        <>
            <Layout title='Administración de Productos - Taller Gonzales'>
                
                <AdminProducts/>

            </Layout>
        </>
    )
}



export default AdminProductos