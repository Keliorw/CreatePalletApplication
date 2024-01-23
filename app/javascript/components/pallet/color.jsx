import React from "react";
import { toast } from 'react-toastify';


export default function Color(props) {
  const handleCopy = (textToCopy) => {
    // Создаем временный textarea и помещаем в него текст
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;

    // Помещаем textarea в DOM, выделяем текст и копируем его
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');

    // Удаляем временный textarea
    document.body.removeChild(textarea);

    toast.success('Текст скопирован успешно!', {
      position: "bottom-center",
      pauseOnHover: false,
      theme: 'dark'
    });
  };
  const removeButton = () => {
    return props.color.visible_button ? (<div className='generator_color_remove-btn' onClick={() => props.destroy_function(props.color.id)}>
                                           <i className={props.color.luminance <= 0.5 ? 'icon icon-white-cross-18px' : 'icon icon-black-cross-18px'}></i>
                                         </div>) : ''
  };

  return (<div className='generator_color'>
    <div className='generator_color_background' style={{background: props.color.color}}></div>
    <div className={props.color.luminance <= 0.5 ? 'generator_color_content is_white' : 'generator_color_content'}>
              <div className='generator_color_hex'>{props.color.hex_color}</div>
              <div className='generator_color_bar-left'></div>
              <div className='generator_color_bar-right'></div>
      <div className='generator_color_btns'>
        <div className='generator_color_remove-btn' onClick={() => handleCopy(props.color.color)}>
          <i className={props.color.luminance <= 0.5 ? 'icon icon-white-copy-18px' : 'icon icon-black-copy-18px'}></i>
        </div>
        {removeButton()}
      </div>
    </div>
  </div>)
}