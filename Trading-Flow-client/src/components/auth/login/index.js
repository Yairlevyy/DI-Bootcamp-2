import React, { useState } from 'react'
import { auth } from '../../../firebase/firebase'
import { Navigate, Link } from 'react-router-dom'
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
import { useAuth } from '../../../context/authContext'
import './login.css'

function Design() {
    const { userLoggedIn } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setErrorMessage('')
            setIsSigningIn(true)
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                setErrorMessage(error.message)
                setIsSigningIn(false)
                console.log(error)
            });
        }
    }

    const resetPassword = async () => {
        if (email.length == 0){
            setErrorMessage('Please enter your Email!')
            return;
        }
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            setErrorMessage('')
            alert('The link was sent!')
        })
        .catch((e)=>{
            console.log(e)
        })
    };
    
    return (
    <div className='container'>
    {userLoggedIn && (<Navigate to={'/dashboard'} replace={true} />)}
    
    <div className='landing_page sub_part'>
        <h1 className='lp_title'>TradingFlow</h1>
        <h2>Empower your trading experience with TradingFlow.</h2>
    </div>

    <div className='auth_page sub_part'>
        <div className='auth_title'>
            <h1>Welcome Back</h1>
            <p>Enter your email and password to access your account</p>
        </div>
        

        <form onSubmit={onSubmit}>
            <div className='input_container'>
                <label>Email</label><br/>
                <input
                    type="email"
                    required
                    value={email} onChange={(e) => { setEmail(e.target.value) }}
                />
            </div>
            <div className='input_container'>
                <label>Password</label><br/>
                <input
                    type="password"
                    required
                    value={password} onChange={(e) => { setPassword(e.target.value) }}
                />
                <p onClick={resetPassword} className='reset_p'>Reset Password</p>
            </div>
            {errorMessage && (
                <p className='error'>{errorMessage}</p>
            )}
            <button 
                type='submit'
                disabled={isSigningIn}
            >
                {isSigningIn ? 'Signing In...' : 'Sign In'}
            </button>
        </form>

        <p className='cta_signup'>Don't have an account? <Link to={'/register'}>Sign up</Link></p>
    </div> 
    </div>
  )
}

export default Design