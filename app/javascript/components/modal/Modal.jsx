import React from "react";

export default function Modal({ visible, setActive, content }) {
    return (<div id='modal' className={visible ? 'modal modal__active' : 'modal'} onClick={() => setActive(false)}>
              <div className={visible ? 'modal_content modal_content__active' : 'modal_content'} onClick={e => e.stopPropagation()}>
                <div className='modal_close btn btn--transparent btn-s btn-icon' onClick={() => setActive(false)}>
                  <i className='icon icon-black-cross-18px'></i>
                </div>
                {content}
              </div>
            </div>)
}