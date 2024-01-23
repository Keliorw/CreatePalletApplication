import React, {useState} from "react";
import SignInModal from "./SignInModal";

export default function SignUpModal(props) {
  const csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  return (<>
    <div className='modal_title'>
      <h2>Sign up</h2>
      <div>Create a free account with your email.</div>
    </div>
    <div className='modal_body'>
      <form action='/users' method="post">
        <input type='hidden' name='authenticity_token' value={csrf} autoComplete='off'/>
        <div className='input-group'>
          <input
            type='text'
            className='input input--m'
            name='user[email]'
            placeholder='Email'
          />
        </div>
        <div className='input-group'>
          <input
            type='password'
            className='input input--m'
            name='user[password]'
            placeholder='Password'
          />
        </div>
        <div className='input-group'>
          <input
            type='password'
            className='input input--m'
            name='user[password_confirmation]'
            placeholder='Again password'
          />
        </div>
        <button type={'submit'} className='btn btn-m btn--primary'>
          Sign up
        </button>
      </form>
    </div>
    <div className='modal_footer'>
      <div className='modal_footer_item'>
        <p>Already have an account?&nbsp;</p>
        <a href={'/users/sign_in'} className='link link--primary link--hover-underline'>
          Sign in
        </a>
      </div>
    </div>
  </>)
}