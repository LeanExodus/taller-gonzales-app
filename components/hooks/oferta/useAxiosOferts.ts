import { useEffect, useState } from "react"

import { Oferta } from "../../../interfaces"
import { getOfertas } from "../../../utils/oferta"



export const useAxiosOferts = () => {
    const [ofertas, setOfertas] = useState<Oferta[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const getOferts = async () => {
        const newOferts = await getOfertas()
        setOfertas(newOferts)
        setIsLoading(false)
    }

    useEffect(() => {

        getOferts()

    }, [])
    return{
        ofertas,
        isLoading
    }
}