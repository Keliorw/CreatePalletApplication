import React from "react";
import copyText from "../copyText";


export default function Color(props) {
  const removeButton = () => {
    return props.color.visible_button ? (<div className='generator_color_remove-btn' onClick={() => props.destroy_function(props.color.id)}>
                                           <i className={props.color.luminance <= 0.5 ? 'icon icon-white-cross-18px' : 'icon icon-black-cross-18px'}></i>
                                         </div>) : ''
  };

  return (<div className='generator_color'>
    <div className='generator_color_background' style={{boxShadow: `0px 0px 0px 1px ${props.color.color}`, background: props.color.color}}></div>
    <div className={props.color.luminance <= 0.5 ? 'generator_color_content is_white' : 'generator_color_content'}>
              <div className='generator_color_hex'>{props.color.hex_color}</div>
              <div className='generator_color_bar-left'></div>
              <div className='generator_color_bar-right'></div>
      <div className='generator_color_btns'>
        <div className='generator_color_remove-btn' onClick={() => copyText(props.color.color)}>
          <i className={props.color.luminance <= 0.5 ? 'icon icon-white-copy-18px' : 'icon icon-black-copy-18px'}></i>
        </div>
        {removeButton()}
      </div>
    </div>
  </div>)
}