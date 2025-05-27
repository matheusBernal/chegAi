import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import { store } from './store';

import HomePage from './pages/HomePage';
import Introduction from './pages/Introduction';
import Community from './pages/Community';
import Blog from './pages/Blog';
import Produtos from './pages/Produtos';
import HomeLayout from './pages/HomeLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Introduction />} />
          <Route element={<HomeLayout />}>
            <Route path="home" element={<HomePage />} />
            <Route path="products" element={<Produtos />} />
            <Route path="community" element={<Community />} />
            <Route path="blog" element={<Blog />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// Medição de performance (opcional)
reportWebVitals();

