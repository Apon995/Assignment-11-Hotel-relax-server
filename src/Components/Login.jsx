import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Customhooks/useAuth';



function Login() {
  const [showPass, setshowPass] = useState(false);
  const [Error, setError] = useState(null);
  const { LoginEmailorPass, GoogleLogin, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();



  const HandleLogin = (e) => {
    e.preventDefault();

    const from = new FormData(e.currentTarget);
    const email = from.get('email');
    const password = from.get('password');

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(password)) {

      setError('Wrong password try again !');

      setTimeout(() => {
        setError(null)
      }, 5000);

      return
    }

    LoginEmailorPass(email, password)
      .then(result => {
        console.log(result);
        e.target.reset();
        navigate('/')

      })
      .catch(error => {
        if ("auth/invalid-login-credentials") {
          setError('please check your email and password !')
          setTimeout(() => {
            setError(null)
          }, 5000);
        }
        else {
          console.log(error)
        }
      })

  }

  const HandleGoogleLogin = () => {
    if (user) {
      return;

    }
    GoogleLogin()
      .then(res => {
        console.log("Log in with :", res?.providerId)
        navigate('/')
      })
      .catch(error => console.log(error))

  }

  return (
    <div className='Login-page'>

      <div className="wrapper">
        <h2>Login</h2>
        {Error && <span style={{ color: 'red', fontSize: '14px', fontWeight: '500', }}>{Error}</span>}
        <br />
        <form onSubmit={HandleLogin}>
          <div className="input-box">
            <input type="email" name='email' placeholder="Enter your email" required />
          </div>
          <div className="input-box password-box">
            <input type={showPass ? 'text' : 'password'} name='password' placeholder="Enter password" required />
            <i className={`fa-solid  ${showPass ? 'fa-eye' : 'fa-eye-slash'}`} onClick={() => setshowPass(!showPass)}></i>
          </div>

          <br />
          <button className='btn-create'>Login Now</button>
        </form>
        <br />
        <p className='or-span'>----------OR---------</p>
        <br />
        <div className='social-icons'>
          <button onClick={HandleGoogleLogin}><i className="fa-brands fa-google"></i></button>
          <button><i className="fa-brands fa-facebook"></i></button>
          <button><i className="fa-brands fa-linkedin"></i></button>
        </div>
        <br />

        <div className="text">
          <h3>You don't have an account? <Link to='/Register'>Register now</Link></h3>
        </div>
      </div>
    </div>
  )
}

export default Login