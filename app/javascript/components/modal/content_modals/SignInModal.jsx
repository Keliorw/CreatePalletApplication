import React from "react";
import SignUpModal from "./SignUpModal";

export default function SignInModal(props) {
  return (<>
    <div className='modal_title'>
      <h2>Sign in</h2>
      <div>Sign in with your email here.</div>
    </div>
    <div className='modal_body'>

    </div>
    <div className='modal_footer'>
      <div className='modal_footer_item'>
        <p>Forgot password?&nbsp;</p>
        <div className='link link--primary link--hover-underline' onClick={() => props.sign_up_modal(<SignUpModal sign_in_modal={props.sign_up_modal} />)}>Reset</div>
      </div>
      <div className='modal_footer_item'>
        <p>Don't have an account?&nbsp;</p>
        <div className='link link--primary link--hover-underline' onClick={() => props.sign_up_modal(<SignUpModal sign_in_modal={props.sign_up_modal} />)}>Sign up</div>
      </div>
    </div>
  </>)
}