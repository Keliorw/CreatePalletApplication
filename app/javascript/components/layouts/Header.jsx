import React, {useState} from 'react';

//SVG
import { Logo } from '../images/Logo.jsx';

const Header = () => {
    const [currentUser, setCurrentUser] = useState(getCurrentUser())

    function getCurrentUser() {
      const container = document.getElementById('application');
      return JSON.parse(container.getAttribute('data-user-data'))
    }

    const logoutCurrentUser = () => {
      const csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      fetch('/users/sign_out', {
        method: "DELETE",
        headers: {
          'X-CSRF-Token': csrf
        },
      }).then(response => {
        if (response.status === 204) {
          location.reload()
        }
      }).catch(error => console.error(error))
    }

    return (
      <header id='header'>
        <a href='/' className='header_logo'>
          <Logo/>
        </a>
        <nav className='nav_container'>
          <ul className='nav_block'>
            <li className='nav_item'>
              <span className='divider'></span>
            </li>
            {!!currentUser ? (<div className={`user_avatar user_avatar-color--${currentUser.id.toString()[0]}`}>
                           {currentUser.email[0].toUpperCase()}
                           <div className={"user_modal"}>
                             <ul className={"user_modal_items"}>
                               <li className={"user_modal_item"}>
                                 Dashboard
                               </li>
                               <li className={"divider"}></li>
                               <li className={"user_modal_item"} onClick={() => logoutCurrentUser()}>
                                 Sign out
                               </li>
                             </ul>
                           </div>
                         </div>) :
                        (<><li className='nav_item'>
                             <a href={'/users/sign_in'} className='link header_signin-btn' >Sign In</a>
                           </li>
                           <li className='nav_item'>
                             <a href={'/users/sign_up'} className='btn btn--primary btn-s header_signup-btn'>Sign Up</a>
                           </li>
                         </>)}
          </ul>
        </nav>
      </header>
    );
};

export default Header;