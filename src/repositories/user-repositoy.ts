export interface  UserCreateData {
    name:string,
    username:string,
    password:string,
    photo?:string,
    role?:string,  
    isActive?: boolean,
}

export interface UserRepository{
    create: (data: UserCreateData) => Promise<void>
    list: () => Promise<void>
}