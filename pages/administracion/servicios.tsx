import { Typography } from '@mui/material';
import type { NextPage } from 'next'


import { Layout } from '../../components/layouts';
import useRedirect from '../../components/hooks/usuario/useRedirect';
import { AdminServices } from '../../components/servicios';


const AdminServicios: NextPage = () => {
    useRedirect()

    return (
        <>
            <Layout title='Administración de Servicios - Taller Gonzales'>

                <AdminServices/>

            </Layout>
        </>
    )
}



export default AdminServicios