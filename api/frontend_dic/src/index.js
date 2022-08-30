import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SignUp from  './components/SignUp';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import Favorites from './components/Favorites';
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <FpjsProvider
      cacheLocation='memory'
      loadOptions={{
        apiKey: 'gF6E5bc2I35TAy0YAoqi',
        region: 'eu',
      }}
    >
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
  </FpjsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
