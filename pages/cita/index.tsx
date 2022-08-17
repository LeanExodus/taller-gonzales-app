import type { NextPage } from 'next'
import { Appointment } from '../../components/cita'


import { Layout } from '../../components/layouts'


const Cita: NextPage = () => {
    return (
        <Layout title='Cita - Taller Gonzales'>

            <Appointment />
        </Layout>
    )
}

export default Cita