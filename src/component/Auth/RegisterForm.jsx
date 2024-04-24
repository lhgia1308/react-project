import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../State/Authentication/Action'
import { useDispatch } from 'react-redux'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const initialValues = {
  email: '',
  password: '',
  firstName: '',
  middleName: '',
  lastName: ''
}
export const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const handleSubmit = (values) => {
    console.log('values', values);
    dispatch(registerUser({userData: values}, navigate))
  }
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <div>
      <div className='relative'>
        <Typography xs={6} variant='h5' className='text-center'>
            Register
        </Typography>
        <div className='absolute top-0'>
          <Button onClick={handleBack} variant='contained'>Back</Button>
        </div>
      </div>
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
                {
                  showPassword ?
                  <VisibilityOffIcon onClick={()=>setShowPassword(!showPassword)} className='absolute top-8 right-3'/> :
                  <VisibilityIcon onClick={()=>setShowPassword(!showPassword)} className='absolute top-8 right-3'/>
                  }
              </div>

              <div className='relative'>
                <Field
                as={TextField}
                name="confirm-password"
                label="Confirm password"
                fullWidth
                variant="outlined"
                margin="normal"
                type={showConfirmPassword ? "normal" : "password"}
                />
                {
                  showConfirmPassword ?
                  <VisibilityOffIcon onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className='absolute top-8 right-3'/> :
                  <VisibilityIcon onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className='absolute top-8 right-3'/>
                  }
              </div>

              <Field
              as={TextField}
              name="firstName"
              label="Fist Name"
              fullWidth
              variant="outlined"
              margin="normal"
              />

              <Field
              as={TextField}
              name="middleName"
              label="Middle Name"
              fullWidth
              variant="outlined"
              margin="normal"
              />

              <Field
              as={TextField}
              name="lastName"
              label="Last Name"
              fullWidth
              variant="outlined"
              margin="normal"
              />

              <Button
              sx={{mt:2, padding:'1rem'}}
              type='submit'
              variant='contained'
              fullWidth
              >
                Register
              </Button>
          </Form>
      </Formik>
    </div>
  )
}
