import { useEffect, useState } from "react"

import { Servicio } from "../../../interfaces"
import { getServicios } from "../../../utils/servicio"


export const useAxiosServices = () => {
    const [servicios, setServicios] = useState<Servicio[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const getServices = async () => {
        const newServices = await getServicios()
        setServicios(newServices)
        setIsLoading(false)
    }

    useEffect(() => {

        getServices()

    }, [])
    return{
        servicios,
        isLoading
    }
}
