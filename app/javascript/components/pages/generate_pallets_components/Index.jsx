import React, { useEffect } from "react";
import GeneratorColor from "../../generator_color";
import { ToastContainer } from 'react-toastify';
import axios from "axios";

const Index = () => {
  const savePallet = () => {
    const colors = document.querySelectorAll('.generator_color_hex');
    let pallet = []
    for(let i = 0; i < colors.length; i++) {
      pallet.push(colors[i].textContent)
    }
    const data = {
      pallet_params: {
        pallet: pallet
      }
    };
    axios.post('/pallets/save_pallet', data)
         .catch(error => console.error(error))
  }

  return (<div id='generator'>
            <ToastContainer />
            <div className='sub_header'>
              <div className='generator_spacebar-suggestion'>Press the spacebar to generate color palettes!</div>
              <div className='navbar'>
                <div className='btn btn--transparent btn-s btn--with-icon' onClick={savePallet}>
                  <i className='icon icon-favorite-18px'></i>
                  <span>Save</span>
                </div>
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