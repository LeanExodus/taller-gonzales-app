import { VoicemailRounded } from "@mui/icons-material"
import { useEffect, useState } from "react"


import { Producto } from "../../../interfaces"
import { getProductos } from "../../../utils/producto"


export const useAxiosProducts = () => {
    const [productos, setProductos] = useState<Producto[]>([])
    const [isLoading, setIsLoading] = useState(true)

  

    const getProducts = async () => {
        
        const newProducts = await getProductos()
        
        setProductos(newProducts)
        
        setIsLoading(false)
    }

    useEffect(() => {

        getProducts()

    }, [])
    return{
        productos,
        isLoading
    }
}
