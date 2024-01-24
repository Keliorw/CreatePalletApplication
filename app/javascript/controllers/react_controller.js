import { Controller } from "@hotwired/stimulus"
import React from "react";
import { createRoot } from 'react-dom/client';
import HomePage from "../components/pages/HomePage";
import GeneratePallets from "../components/pages/GeneratePallets";
import SignInPage from "../components/pages/SignInPage";
import SignUpPage from "../components/pages/SignUpPage";
import UserPallets from "../components/pallet/UserPallets";
import TrendPallets from "../components/pallet/TrendPallets";

export default class extends Controller {
  connect() {
    const container = document.getElementById('application');
    const getContentPage = () => {
      switch (window.location.pathname) {
        case '/':
          return <HomePage />
        case '/generate':
          return <GeneratePallets />
        case '/users/sign_in':
          return <SignInPage />
        case '/users/sign_up':
          return <SignUpPage />
        case '/user_pallets':
          return <UserPallets />
        case '/pallets/trending':
          return <TrendPallets />
        default:
          return <HomePage />
      }
    }

    const root = createRoot(container);
    root.render(getContentPage());
  }
}
