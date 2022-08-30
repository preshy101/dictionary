// import logo from './logo.svg';
// import './App.css';
import React, { Component, useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react'

function App() {

    // const {
    //     isLoading,
    //     error,
    //     data,
    //   } = useVisitorData();

    //   if (isLoading) {
    //     return <div>Loading...</div>;
    //   }
    //   if (error) {
    //     return <div>An error occured: {error.message} <br></br>check data connection, and try again</div>;
    //   }

    //   if (data) {
    //     // perform some logic based on the visitor data
    //     console.log(data)
        return (

          <div>
            {/* Welcome {data.visitorFound ? `back ${data.visitorId}` : ''}! */}
           
            <Search />
          </div>
        );
    //   } else {
    //     return null;
    //   }
    }

export default App;


