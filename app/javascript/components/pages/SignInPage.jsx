import React from 'react';
import Header from "../layouts/Header";
import SignInModal from "../modal/content_modals/SignInModal";

function SignInPage() {
  return (
    <>
      <Header />
      <div className='wrapper' style={{textAlign: 'center'}}>
        <SignInModal />
      </div>
    </>
  )
}

export default SignInPage;