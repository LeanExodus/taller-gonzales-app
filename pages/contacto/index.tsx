import type { NextPage } from 'next'


import { ContactPage } from '../../components/contacto'
import { Layout } from '../../components/layouts'


const Contacto: NextPage = () => {
    return (
        <Layout title='Contacto - Taller Gonzales'>
            
            <ContactPage/>
        </Layout>
    )
}

export default Contacto