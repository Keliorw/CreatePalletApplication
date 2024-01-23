import React, {useEffect, useState} from "react";
import SignUpModal from "./SignUpModal";

export default function SignInModal(props) {
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  const handleInputChangeName = (event) => {
    setUserName(event.target.value);
  };

  const handleInputChangePassword = (event) => {
    setUserPassword(event.target.value);
  };

  const sendFormSignIn = () => {
      fetch('/users/sign_in', {
        method: "POST",
        headers: {
          'X-CSRF-Token': csrf
        },
        data: {
          authenticity_token: csrf,
          user: {
            name: userName,
            password: userPassword
          }
        }
      }).then((response) => {
        console.log(JSON.stringify(response))
      })
        .then((data) => {
          console.log(data)
        })
        .catch((error) => console.error(error))
  }

  return (<>
    <div className='modal_title'>
      <h2>Sign in</h2>
      <div>Sign in with your email here.</div>
    </div>
    <div className='modal_body'>
      <form method='post' action='/users/sign_in'>
        <input type='hidden' name='authenticity_token' value={csrf} autoComplete='off'/>
        <div className='input-group'>
          <input
            type='text'
            value={userName}
            onChange={handleInputChangeName}
            className='input input--m'
            name='user[email]'
            placeholder='Email'
          />
        </div>
        <div className='input-group'>
          <input
            type='password'
            value={userPassword}
            onChange={handleInputChangePassword}
            className='input input--m'
            name='user[password]'
            placeholder='Password'
          />
        </div>
        <button type='submit' className='btn btn-m btn--primary'>
          Sign in
        </button>
      </form>
    </div>
    <div className='modal_footer'>
      <div className='modal_footer_item'>
        <p>Don't have an account?&nbsp;</p>
        <a href={'/users/sign_up'} className='link link--primary link--hover-underline'>
          Sign up
        </a>
      </div>
    </div>
  </>)
}