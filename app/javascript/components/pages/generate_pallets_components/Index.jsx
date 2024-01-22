import React, { useEffect } from "react";
import GeneratorColor from "../../generator_color";
import { ToastContainer } from 'react-toastify';

const Index = () => {
  return (<div id='generator'>
            <ToastContainer />
            <div className='sub_header'>
              <div className='generator_spacebar-suggestion'>Press the spacebar to generate color palettes!</div>
              <div className='navbar'>
                <a className='btn btn--transparent btn-s btn--with-icon'>
                  <i className='icon icon-favorite-18px'></i>
                  <span>Save</span>
                </a>
              </div>
            </div>
            <div id='generator_container'>
              <div id='generator_colors'>
                <GeneratorColor />
              </div>
            </div>
          </div>);
};

export default Index;