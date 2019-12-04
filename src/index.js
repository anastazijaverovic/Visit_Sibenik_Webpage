'use strict'

import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import 'styles/style.css'

import ContactForm from 'components/ContactForm.jsx'


const App = () => (
    <div className="container">
        <h1 className='center'>SHARE YOUR EXPERIENCE WITH US</h1>
        <ContactForm className='center'/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))

// Supporting hot module reloading (HMR)
if (module.hot) module.hot.accept();