import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const ENV = import.meta.env.VITE_APP_ENV || "development";
const rooturl = import.meta.env.VITE_APP_ROOTURL || "";
// Fetch the corresponding config file before rendering the app
fetch(`${rooturl}config/config.${ENV}.json`)
  .then((response) => response.json())
  .then((config) => {
    window.APP_CONFIG = config; // Store in a global variable
    console.log(`Config Loaded for ${ENV}:`, window.APP_CONFIG);
    // Render the app only after config is loaded
    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  }).catch((error) => {
    console.error(`Failed to load config.${ENV}.json:`, error);
  });
