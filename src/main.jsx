// Import the React library, which is necessary for creating React components
import React from 'react';

// Import the ReactDOM library, which is used to render React components to the DOM
import ReactDOM from 'react-dom/client';

// Import the App component from the App.jsx file. This is the main component of your application.
import App from './App.jsx';

// Import the CSS file for your application. This file contains global styles that apply to your entire application.
import './index.css';

// Use ReactDOM to render the App component wrapped in React.StrictMode into the DOM element with the id 'root'.
// React.StrictMode is a wrapper component that checks for potential problems in the application during the development build.
ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <App />
 </React.StrictMode>,
);
