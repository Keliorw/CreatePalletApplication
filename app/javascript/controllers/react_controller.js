import { Controller } from "@hotwired/stimulus"
import React from "react";
import { createRoot } from 'react-dom/client';
import HomePage from "../components/pages/HomePage";
import GeneratePallets from "../components/pages/GeneratePallets";

export default class extends Controller {
  connect() {
    const container = document.getElementById('application');
    const getContentPage = () => {
      switch (window.location.pathname) {
        case '/':
          return <HomePage />
        case '/generate':
          return <GeneratePallets />
        case '/pallets/trending':
          return ''
        default:
          return ''
      }
    }

    const root = createRoot(container);
    root.render(getContentPage());
  }
}
