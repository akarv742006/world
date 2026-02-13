import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

try {
  console.log("React Mounting Started...");
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  console.log("React Mounting Success.");
} catch (e) {
  console.error("CRITICAL MOUNTING FAILURE:", e);
  alert("Mount Error: " + e.message);
}
