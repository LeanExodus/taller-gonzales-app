import { Typography } from '@mui/material';
import type { NextPage } from 'next'

import { Layout } from '../../components/layouts';

import { AdminUsers } from '../../components/usuarios';
import useRedirectAuthenticated from '../../components/hooks/usuario/useRedirectAuthenticated';
import useRedirect from '../../components/hooks/usuario/useRedirect';


const AdminUsuarios: NextPage = () => {
    useRedirect()
    useRedirectAuthenticated()

    return (
        <>
            <Layout title='Administración de Usuarios - Taller Gonzales'>
                
                <AdminUsers/>

            </Layout>
        </>
    )
}



export default AdminUsuarios