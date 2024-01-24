import React, {useEffect, useState} from "react";
import axios from "axios";
import tinycolor from "tinycolor2";
import copyText from "../copyText";
import {ToastContainer} from "react-toastify";

export default function Pallets({type, title, sub_title, show_name}) {
  const [palletValue, setPalletValue] = useState([])

  useEffect(() => {
    const setPallets = async () => {
      try {
        switch (type) {
          case 'user':
            const user_pallets = await axios.post('/pallets/get_user_pallets');
            setPalletValue(user_pallets.data.pallets);
            break;
          case 'trend':
            const trend_pallets = await axios.post('/pallets/get_trend_pallets');
            setPalletValue(trend_pallets.data.pallets);
            break;
          default:
            break;
        }
      } catch (error) {
        console.error(error);
      }
    };

    setPallets();
  }, [])

  return (
    <>
      <ToastContainer />
      <div className={'wrapper'}>
        <div className={'container'}>
          <div className={'page-title'}>
            <h1>
              {title}
            </h1>
            <div className={'page-sub_title'}>
              {sub_title}
            </div>
          </div>
        </div>
        <div className={'container'}>
          <div className={'card-grid'}>
            {palletValue.map(pallet =>
              <div className={'palette-card'} key={pallet.id}>
                <div className={'palette-card_colors'}>
                  {JSON.parse(pallet.pallet).map((color, index) =>
                    <div className={tinycolor(`#${color}`).toHsl().l <= 0.5 ? 'is_white' : ''} key={index} style={{background: `#${color}`}} onClick={() => copyText(color)}>
                      <span>{color}</span>
                    </div>
                  )}
                </div>
                {show_name ? (
                  <div className={'palette-card_info'}>
                    <a className={'link'}>{pallet.name}</a>
                    <div className={'palette-card_btns'}></div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}