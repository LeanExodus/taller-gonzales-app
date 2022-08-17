import { useEffect, useState } from "react"

import { User } from "../../../interfaces"
import { getUsuarios } from "../../../utils/usuario"



export const useAxiosUsers = () => {
    const [usuarios, setUsuarios] = useState<User[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const getUsers = async () => {
        try {
            const newUsers = await getUsuarios()
            setUsuarios(newUsers)
            setIsLoading(false)
        } catch (error) {
            
        }
    }

    useEffect(() => {

        getUsers()

    }, [])
    return{
        usuarios,
        isLoading
    }
}