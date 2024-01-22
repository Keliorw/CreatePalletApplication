import React, {useState} from 'react';
import Modal from '../modal/Modal';
import SignInModal from '../modal/content_modals/SignInModal';
import SignUpModal from '../modal/content_modals/SignUpModal'

//SVG
import { Logo } from '../images/Logo.jsx';

const Header = () => {
    const [modalActive, setModalActive] = useState(false)
    const [modalContent, setModalContent] = useState(null);

    const openModalWithContent = (content) => {
      setModalContent(content);
      setModalActive(true);
    }

    return (
        <header id='header'>
            <Modal visible={modalActive} setActive={setModalActive} content={modalContent} />
            <a href='/' className='header_logo'>
                <Logo />
            </a>
            <nav className='nav_container'>
                <ul className='nav_block'>
                    <li className='nav_item'>
                        <div className='link header_tools-btn'>Tools</div>
                    </li>
                    <li className='nav_item'>
                        <span className='divider'></span>
                    </li>
                    <li className='nav_item'>
                        <div className='link header_signin-btn' onClick={() => openModalWithContent(<SignInModal />)}>Sign In</div>
                    </li>
                    <li className='nav_item'>
                        <div className='btn btn--primary btn-s header_signup-btn' onClick={() => openModalWithContent(<SignUpModal />)}>Sign Up</div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;