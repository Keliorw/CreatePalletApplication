import React from "react";

export default function SignInModal() {
  const csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

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