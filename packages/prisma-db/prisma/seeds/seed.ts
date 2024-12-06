import { PrismaClient } from '@prisma/client'
import { createGuestUser } from './guestUser'

const prisma = new PrismaClient()

async function main () {
    await createGuestUser()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })