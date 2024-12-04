import { useState } from 'react'
import {z} from "zod"
import { Card, CardContent, CardFooter, CardHeader } from '../../../../molecules/shadcn/card.js';
import { useTransition } from 'react';
import { Button } from '../../../../atoms/shadcn/button';
import { ForgotPasswordSchema } from '@repo/zod/src/auth'
import {  useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../../molecules/shadcn/form.js'
import { Input } from '../../../../atoms/shadcn/input.js';
import { FormResult } from './FormResult.js';

interface ForgotPasswordCardProps {
  errorMessage?:string;  
  successMessage?:string;
  resetFunction?:any; 
  backFunction?:any;
}

const ForgotPasswordCard = ({errorMessage,successMessage,resetFunction,backFunction}
  :ForgotPasswordCardProps
) => {
  const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues:{
      email: '',
    },
  })
  const [error, setError] = useState<string | undefined>(errorMessage)
  const [success, setSuccess] = useState<string | undefined>(successMessage)

  const [isPending, startTransition] = useTransition()

  function handleSubmit(data: z.infer<typeof ForgotPasswordSchema>) {
    setError("")
    setSuccess("")
    startTransition(()=>{
      resetFunction(data.email)
      .then((data:any)=>{
            setError(data?.error);
            setSuccess(data?.success);
      })
    })
  }
  return (
    <Card className='w-[400px] bg-white text-black shadow-xl shadow-white/20'>
      <CardHeader>
        <div className='text-6xl font-bold text-center'>Forgot Password</div>
        <div className='text-md font-extralight text-center'>Send Reset Password Mail</div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-6'>
            <div className='space-y-4 mb-4'>
              <FormField control={form.control} name="email" render={({field})=>(
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input disabled={isPending}  type="email" placeholder='example@gmail.com' {...field}/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}/>
            </div>
            <FormResult type="error" message={error }/>
            <FormResult type="success" message={success}/>
            <Button  disabled={isPending}  variant="default" type="submit">Send Email</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className='flex justify-center'>
        <div onClick={backFunction} className='text-sm text-center text-black/60 hover:text-black cursor-pointer hover:underline'>Go to Login Page</div>
      </CardFooter>
    </Card>
  )
}

export default ForgotPasswordCard;