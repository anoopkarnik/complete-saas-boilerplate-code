import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()

    const quote = 'The only way to do great work is to love what you do.'
    const author = 'Late Steve Jobs'
    const credential = 'Ex CEO of Apple Inc.'

    const goToLoginPage = ()=>{
        router.push('/auth/login')
    }
  return (
    <div>page</div>
  )
}

export default page