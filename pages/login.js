import Layout from '@/components/Layout'
import getError from '@/utils/error';
import Link from 'next/link'
import Router, { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { signIn, useSession } from 'next-auth/react'

function LoginScreen() {


  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/')
    }


  }, [router, session, redirect]);



  const { register, handleSubmit, watch, formState: { errors } } = useForm();


  console.log(watch("example")); // watch input value by passing the name of it

  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })
      if (result.error) {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error(getError(error))
    }
  }


  return (
    <Layout title="Login">
      <form onSubmit={handleSubmit(submitHandler)} className='mx-auto max-w-screen-md'>
        <h1 className='mb-4 text-xl text-center'>Login</h1>
        <div className='mb-4'>
          <label htmlFor="email">Email</label>
          <input autoFocus className='w-full' type="email" id="email"
            {...register('email', {
              required: 'Please enter email!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
            })}
          />
          {errors.email && (<p className='text-red-500' >{errors.email.message}</p>)}
        </div>
        <div className='mb-4'>
          <label htmlFor="email">Password</label>
          <input type="password" id="password" autoFocus className='w-full'
            {...register('password', {
              required: 'Please enter password',
              minLength: { value: 6, message: 'password should be more than 5 characters' }
            })}
          />
          {errors.password && (<p className='text-red-500' >{errors.password.message}</p>)}
        </div>
        <div className='mb-4'>
          <button className='primary-button'>
            Login
          </button>
        </div>
        <div>
          Don't have an account? Please <Link className='hover:text-green-500' href="register" >register</Link>
        </div>
      </form>
    </Layout>
  )
}

export default LoginScreen