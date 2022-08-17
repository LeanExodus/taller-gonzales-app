import Cookies from "js-cookie"
import { TallerApi } from "../../api"
import { User } from "../../interfaces"



    
export const getUsuarios = async () => {

    const { data } = await TallerApi.get<User[]>("/users",
        {
          headers: {
            Authorization: 'Bearer ' + Cookies.get('jwt')
          }
        })

    const usuarios: User[] = data.map(({ id, username, email, provider, confirmed, blocked, createdAt, updatedAt, role }) => ({

        id: id,
        username: username,
        email: email,
        provider:  provider,
        confirmed: confirmed,
        blocked:   blocked,
        createdAt: createdAt,
        updatedAt: updatedAt,
        role:      role

    }))


    return usuarios


}