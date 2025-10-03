import './style.css'
import { createRoot } from 'react-dom/client'
import {StrictMode} from "react";
import App from "./App.tsx";
import 'semantic-ui-css/semantic.min.css';

const rootElement = document.getElementById('root');
if (rootElement !== null) {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
} else {
  console.error("Root element not found.");
}