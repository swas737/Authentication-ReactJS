import React, { useState } from 'react'
import './Login.css'
import swal from 'sweetalert'
export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const validate = (e) => {
    e.preventDefault()
    if (username == 'javascript' && password == 'react') {
      swal('Login Successfull', 'Congratulation', 'success')
    } else {
      swal('Invalid Credentials', 'Please Check your details', 'error')
    }
  }
  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-4 shadow-lg p-3 mb-5 bg-white rounded'>
          <h1 style={{ textAlign: 'center' }}>User Authentication</h1>
          <form onSubmit={validate}>
            <input
              type='text'
              placeholder='Username'
              className='form-control'
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
            <input
              type='password'
              placeholder='Password'
              className='form-control'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            <input type='Submit' className='btn btn-primary' />
          </form>
        </div>
      </div>
    </div>
  )
}
