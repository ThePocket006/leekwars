import {Exclude} from "class-transformer";

export interface IUser {
    id?: number
    token: string
    username: string
    password: string
}

export class User implements IUser {
    id?: number
    token: string = '';
    username: string = '';
    @Exclude()
    password: string = '';
}
