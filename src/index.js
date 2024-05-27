import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SimpleReactLightbox from 'simple-react-lightbox';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

ReactDOM.render(
    <React.StrictMode>
          <AlertProvider template={AlertTemplate} {...options} >
            <SimpleReactLightbox>
              <App />
            </SimpleReactLightbox>
          </AlertProvider>
    </React.StrictMode>
  ,

  document.getElementById('root')
);

