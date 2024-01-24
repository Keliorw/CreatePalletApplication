import React from "react";
import Header from "../layouts/Header";
import Pallets from "./Pallets";

export default function TrendPallets() {
  return (
    <>
      <Header />
      <Pallets type={'trend'} title={'Trending Color Palettes'} sub_title={'Get inspired by thousands of beautiful color schemes and make something cool!'} show_name={false} />
    </>
  )
}