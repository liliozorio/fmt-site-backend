import { User } from "@/modules/accounts/infra/typeorm/entities/User"
import { Request } from 'express'
declare module 'express' {
    export interface Request {
        user: {
            email: any;
            id: number;
        };
    }
}