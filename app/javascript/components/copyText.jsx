import React from "react";
import {toast} from "react-toastify";

export default function copyText(textToCopy) {
  // Создаем временный textarea и помещаем в него текст
  const textarea = document.createElement('textarea');
  textarea.value = textToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  // Удаляем временный textarea
  document.body.removeChild(textarea);
  toast.success('Color copied successfully!', {
    position: "bottom-center",
    pauseOnHover: false,
    theme: 'dark'
  });
}

