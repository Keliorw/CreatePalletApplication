import React from "react";
import Header from "../layouts/Header";
import Pallets from "./Pallets";

export default function UserPallets() {
  return (
    <>
      <Header />
      <Pallets type={'user'} title={'Your palettes'} sub_title={''} show_name={true} />
    </>
  )
}