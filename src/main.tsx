import React from 'react'
import App from './App'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Componnets/Header'
import SneakersMain from './Componnets/SneakersMain'
import { Provider } from 'react-redux'
import Store from './Componnets/Store'
import ImagePopup from './Componnets/ImagePopup'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
      <Header />
      <SneakersMain />
      <ImagePopup/>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
