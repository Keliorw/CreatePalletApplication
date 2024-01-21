import { Controller } from "@hotwired/stimulus"
import React from "react";
import { createRoot } from 'react-dom/client';
import App from "../components/App";

export default class extends Controller {
  connect() {
    console.log("React controller connected");
    const container = document.getElementById('app');
    const root = createRoot(container);
    root.render(<App tab="home" />);
  }
}
