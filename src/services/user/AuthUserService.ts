import prismaClient from "../../prisma";

import { compare } from 'bcryptjs'

import { sign } from 'jsonwebtoken'

interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{     // Processo de Login do Usuário
    async execute({email, password}: AuthRequest){
        const user = await prismaClient.user.findFirst({
            where:{
                email: email 
            }
        })

        if(!user){
            throw new Error("Usuário/Senha incorreta") 
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Usuário/Senha incorreta")
        }

        const token = sign(
            {
                name: user.name,
                email: user.name
            },
            process.env.JWT_SECRET, 
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )
        
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}


export { AuthUserService }; 