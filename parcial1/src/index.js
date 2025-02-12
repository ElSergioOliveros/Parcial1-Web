import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./pages/App";
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from "react-intl";

import spanishText from "./languages/Spanish.json";
import englishText from "./languages/English.json";

const language = navigator.language;

let languageText; 

if(language === "en-US"){
  languageText = englishText;
}
else if(language === "es-ES"){
  languageText = spanishText;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider locale={language} messages={languageText}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
