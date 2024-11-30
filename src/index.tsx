import React from 'react'
import ReactDOM from 'react-dom'
import {  store } from './app/store'
import { Provider } from 'react-redux'
import App from './components_sandbox/App'

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
