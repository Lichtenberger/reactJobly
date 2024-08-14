import React, {useContext, useState} from 'react'
import {useForm} from 'react-hook-form'
import {PlaceHolder} from 'reactstrap'
import './SignUp.css'
import {Card, CardBody, CardTitle} from 'reactstrap'
import JoblyApi from '../Api.js'
import TokenContext from './TokenContext'

const SignUp = () => {
    const {register, handleSubmit, reset} = useForm()
    const [data, setData] = useState('')
    const {token, setToken} = useContext(TokenContext)

    const signUpUser = (data, evt) => {
        evt.preventDefault()
        const newToken = JoblyApi.register(data).token
        setToken(newToken)
    }
    return (
        <div className='SignUp'>
            <Card className='col-sm-3 text-center' id='signupcard' style={{width: '15rem'}}>
                <CardTitle className='display-5'>Sign Up</CardTitle>
                <CardBody>
                    <form onSubmit={handleSubmit((data, e) => signUpUser(data, e))}>
                        <label>Username:
                            <input {...register('username')} placeholder='username'></input>
                        </label>
                        <label>Password:
                            <input {...register('password')} placeholder='password'></input>
                        </label>
                        <label>First name:
                            <input {...register('firstName')} placeholder='First name'></input>
                        </label>
                        <label>Last name:
                            <input {...register('lastName')} placeholder='Last name'></input>
                        </label>
                        <label>Email:
                            <input {...register('email')} placeholder='email' type='email'></input>
                        </label>
                        <button className='btn btn-secondary'>Sign Up</button>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}

export default SignUp