import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()


if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
// if running in production mode then golbalThis.prisma is never setup equal to prisma 
// because server starts once and their is no hot-reloading problem 

// in react we dont ever connect to database, we use backend endpoints
// in express hot module reloaidng does not happen

export default prisma
