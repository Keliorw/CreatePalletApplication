import React from "react";
import SignInModal from "./SignInModal";

export default function SignUpModal(props) {
  return (<>
    <div className='modal_title'>
      <h2>Sign up</h2>
      <div>Create a free account with your email.</div>
    </div>
    <div className='modal_body'>

    </div>
    <div className='modal_footer'>
      <div className='modal_footer_item'>
        <p>Already have an account?&nbsp;</p>
        <div className='link link--primary link--hover-underline' onClick={() => props.sign_in_modal(<SignInModal sign_up_modal={props.sign_in_modal} />)}>Sign in</div>
      </div>
    </div>
  </>)
}