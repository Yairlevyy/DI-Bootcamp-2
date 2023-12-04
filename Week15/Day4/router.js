const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users_router = express.Router();

// Function Sample to upload data to the database

// Sign Up

const _signUp = (id,email,password) => {
    return db('users').insert({id,email,password},["id"]);
}

// Check if email exist

const _checkEmail = (email) => {
    return db('users').select('email').where({email})
}

// Sign In

const _signIn = (email) => {
    return db('users').select('id','email','password').where({email})
}

// Routes 

const checkEmail = async (email) => {
    try {
        const res = await _checkEmail(email)
        if (res.length == 0) {
            return true
        } else {
            return false
        }
    } catch (err) {
        return false
    }
};

users_router.post('/signup', async (req,res) => {
    const {email,password} = req.body;
    console.log(req.body)
    const emailStatus = await checkEmail(email);
    if (emailStatus) {
        try { 
        const hash_password = await hashPassword(password)
            try { 
                const id = uuidv4();
                const data = await _signUp(id,email,hash_password);
                
                // Generate a JWT for the new user
                const token = jwt.sign({ id, email }, process.env.JWT_KEY, {
                expiresIn: '1h', // Token expires in 3 days
                });

                // Generate a refresh token with a longer expiration time
                const refreshToken = jwt.sign({ id: user.id, username: user.username }, secretKey, {
                    expiresIn: '7d', // Refresh token expires in 7 days
                });

                // Set the JWT as an HTTP cookie
                res.cookie('token', token, { httpOnly: true });    
                res.cookie('refreshToken', refreshToken, { httpOnly: true });  

                res.status(200).json({msg:'The account was successfuly created !',user_id:data[0].id,token:token})
            } catch (err) {
                console.log(err)
                res.status(404).json({msg:'Error occured, please try again'})
            }
        } catch (err) {
        console.log(err)
        res.status(404).json({msg:'Error occured, please try again'})
        }
    } else {
        res.status(404).json({msg:'This email already exist!'})
    }});

// Function to encrypt the password

async function hashPassword(plainTextPassword) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);
  return hashedPassword;
}

users_router.post('/signin', async (req,res) => {
    const {email,password} = req.body;
    try { 
        const data = await _signIn(email);
        // check length of the array to verify that the email exist 
        if (data.length == 0) {
            return res.status(404).json({msg:"Sorry, this email doesn't exist!"})
        }
        try {
            const isMatch = await comparePasswords(password,data[0].password)
            if (isMatch) {
                // Generate a JWT for the new user
                const token = jwt.sign({ id:data[0].id, email }, process.env.JWT_KEY, {
                expiresIn: '1h', // Token expires in 3 days
                });
                console.log("token",token)
                // Set the JWT as an HTTP cookie
                // res.cookie('token', token, { httpOnly: true });               
                res.status(200).json({msg:'Successfuly login !',user_id:data[0].id,token:token})
            } else {
                res.status(404).json({msg:"Password wrong!"})
            }
        } catch (err) {
            console.log(err)
            res.status(404).json({msg:'Error occured, please try again'})
        }
    } catch (err) {
        console.log(err)
        res.status(404).json({msg:'Error occured, please try again'})
    }
});

async function comparePasswords(plainTextPassword, hashedPassword) {
  const isMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
  return isMatch;
};

users_router.post('/check-user', authenticateJWT, (req, res) => {
  const user_id = req.user.id;
  res.status(200).json({ message: 'The user is authenticate!',user_id});
});

users_router.post('/logout', (req, res) => {
  // Clear the JWT cookie
  res.clearCookie('token');
  res.status(200).json({ message: 'Logout successful' });
});

users_router.post('/refresh', (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token not found' });
  }

  jwt.verify(refreshToken, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Refresh token verification failed' });
    }

    const accessToken = jwt.sign({ id: user.id, username: user.username }, secretKey, {
      expiresIn: '1h', 
    });

    // Set the new access token as an HTTP cookie
    res.cookie('token', accessToken, { httpOnly: true });

    res.status(200).json({ message: 'Token refreshed successfully' });
  });
});

export default users_router;