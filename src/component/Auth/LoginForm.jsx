import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../State/Authentication/Action'
import { useDispatch } from 'react-redux'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const initialValues = {
    email: '',
    password: ''
}
export const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        console.log('values', values);
        dispatch(loginUser({reqData: values, setError: setError, navigate: navigate}))
    }
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const [error, setError] = useState('');
  return (
    <div>
        <Typography variant='h5' className='text-center'>
            Login
        </Typography>
        <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        >
            <Form>
                <Field
                as={TextField}
                name="email"
                label="Email"
                fullWidth
                variant="outlined"
                margin="normal"
                />
                <div className='relative'>
                    <Field
                    as={TextField}
                    name="password"
                    label="Password"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    type={showPassword ? "normal" : "password"}
                    />
                    <div className='absolute top-7 right-3'>
                        {
                            showPassword ? 
                            <VisibilityOffIcon onClick={handleShowPassword} className='cursor-pointer'/> : 
                            <VisibilityIcon onClick={handleShowPassword} className='cursor-pointer'/>
                        }
                    </div>
                </div>
                <Typography sx={{color:'red', fontWeight:'bold', textAlign: 'center'}}>{error}</Typography>
                <Button
                sx={{mt:2, padding:'1rem'}}
                type='submit'
                variant='contained'
                fullWidth
                >
                    Login
                </Button>
            </Form>
        </Formik>
        <Typography variant='body2' align='center' sx={{mt:3}}>
            Don't have an account?
            <Button size='small' onClick={() => navigate("/account/register")}>
                Register
            </Button>
        </Typography>
    </div>
  )
}
