import React from 'react';
import Header from "../layouts/Header";
import SignUpModal from "../modal/content_modals/SignUpModal";

function SignInPage() {
  return (
    <>
      <Header />
      <div className='wrapper' style={{textAlign: 'center'}}>
        <SignUpModal />
      </div>
    </>
  )
}

export default SignInPage;