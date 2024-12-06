'use client'
import LoginPage from '@repo/ui/templates/auth/v1/LoginPage'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { DEFAULT_LOGIN_REDIRECT } from '../../../routes'
import { signIn } from 'next-auth/react'

const page = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const title = 'Loading...'
    const description = 'Please wait while we are loading the page!'
    const quote = 'The only way to do great work is to love what you do.'
    const author = 'Late Steve Jobs'
    const credential = 'Ex CEO of Apple Inc.'
    const showEmail = true
    const showGoogleProvider = true
    const showGithubProvider = true
    const showLinkedinProvider = true
    const urlError = searchParams.get('error') === 'OAuthAccountNotLinked' ? 'This email is already in use with another provider.' : ''

    const login = async (type:string)=>{
        await signIn(type,{callbackUrl: DEFAULT_LOGIN_REDIRECT})
    }

    const goToForgotPasswordPage = ()=>{
        router.push('/auth/forgot-password')
    }

    const goToRegisterPage = ()=>{
        router.push('/auth/register')
    }

  return (
    <div>
        <LoginPage title={title} description={description} quote={quote} author={author} credential={credential} 
        showEmail={showEmail} showGoogleProvider={showGoogleProvider} showGithubProvider={showGithubProvider} 
        showLinkedinProvider={showLinkedinProvider} onEmailSubmit={login} onGoogleProviderSubmit={login} 
        onGithubProviderSubmit={login} onLinkedinProviderSubmit={login} forgotPasswordFunction={goToForgotPasswordPage} 
        backFunction={goToRegisterPage} errorMessage={urlError}/>
    </div>
  )
}

export default page