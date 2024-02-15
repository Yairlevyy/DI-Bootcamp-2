import React, { useState } from 'react'
import { auth } from '../../../firebase/firebase'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { useAuth } from '../../../context/authContext'
import './register.css'

function Register() {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if (password != confirmPassword){
            setErrorMessage('Password not match!');
            return;
        }
        if(!isRegistering) {
            setErrorMessage('')
            setIsRegistering(true)
            createUserWithEmailAndPassword(auth, email, password)
            .then(()=>{
                handleNavigate()
            })
            .catch((error)=>{
                setErrorMessage(error.message)
                setIsRegistering(false)
            })
        }
    }

    const handleNavigate = async () =>{
        sendEmailVerification(auth.currentUser)
        .then(() => {
            navigate('/dashboard', {replace:true})
        });
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
            <h1>Access my TradingFlow</h1>
            <p>100% Free. No Premium Plans.</p>
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
            </div>
            <div className='input_container'>
                <label>Confirm Password</label><br/>
                <input
                    type="password"
                    required
                    value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
                />
            </div>
            {errorMessage && (
                <p className='error'>{errorMessage}</p>
            )}
            <button 
                type='submit'
                disabled={isRegistering}
            >
                {isRegistering ? 'Signing Up...' : 'Sign Up'}
            </button>
        </form>

        <p className='cta_signup'>Already have an account? <Link to={'/login'}>Sign in</Link></p>
    </div> 
    </div>
  )
}

export default Register