import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const resolvers = {
    Query: {
        async posts(_parent, { author }, _context, _info){
            const posts = prisma.post.findMany({
                include: {
                    author: true
                }
            })
            return posts
        },
    },
    Mutation: {
        async createPost(User, { question, description, language }, _context, _info){
            const post = await prisma.post.create({
                data: {
                    question,
                    description,
                    language,
                    author: {
                        connect: {
                            id: Number(1)
                        }
                    }
                }
            })
            return post
        },
        updatePost(_, { id, question, description, language }, _context, _info){
            return prisma.post.update({
                where: {
                    id: id
                },
                data: {
                    question,
                    description,
                    language
                }
            })
        },
        deletePost(_, { id }, _context, _info){
            return prisma.post.delete({
                where: {
                    id: id
                }
            })
        }
    }
}