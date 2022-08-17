import type { NextPage } from 'next'



import { Layout } from '../../components/layouts';
import useRedirect from '../../components/hooks/usuario/useRedirect';
import { AdminOferts } from '../../components/ofertas';


const AdminOfertas: NextPage = () => {

    useRedirect()
    return (
        <>
            <Layout title='Administración de Ofertas - Taller Gonzales'>

                <AdminOferts />

            </Layout>
        </>
    )
}



export default AdminOfertas