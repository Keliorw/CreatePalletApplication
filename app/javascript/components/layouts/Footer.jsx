import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div id="footer_credits">
          © Create pallet by <span>Alexey Gudkov</span>. From a creative to all the others.
        </div>
        <nav className="nav_container">
          <ul className="nav_block">
            <li>
              <a href='' target='_blank'>
                <i className="icon icon-logo-twitter-24px"></i>
              </a>
            </li>
            <li>
              <a href='' target='_blank'>
                <i className="icon icon-logo-facebook-24px"></i>
              </a>
            </li>
            <li>
              <a href='' target='_blank'>
                <i className="icon icon-logo-pinterest-24px"></i>
              </a>
            </li>
            <li>
              <a href='' target='_blank'>
                <i className="icon icon-logo-instagram-24px"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;