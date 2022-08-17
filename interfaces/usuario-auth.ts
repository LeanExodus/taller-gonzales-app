export interface UsuarioAuth{
    jwt:  string;
    id:   number;
    email: string;
    username: string;
}

export interface DataUsuarioAuth {
    jwt:  string;
    user: User;
}

export interface User {
    id:        number;
    username:  string;
    email:     string;
    provider:  string;
    confirmed: boolean;
    blocked:   boolean;
    createdAt: Date;
    updatedAt: Date;
    role:      Role;
}

export interface Role {
    id:          number;
    name:        string;
    description: string;
    type:        string;
    createdAt:   Date;
    updatedAt:   Date;
}
