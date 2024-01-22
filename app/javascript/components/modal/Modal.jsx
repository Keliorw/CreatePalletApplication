import React from "react";

export default function Modal({ visible, setActive, content }) {
    return (<div className={visible ? 'modal modal__active' : 'modal'} onClick={() => setActive(false)}>
              <div className={visible ? 'modal_content modal_content__active' : 'modal_content'} onClick={e => e.stopPropagation()}>
                {content}
              </div>
            </div>)
}