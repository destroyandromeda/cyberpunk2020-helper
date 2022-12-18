import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Home, Plug } from "pages";
import { BaseLayout } from 'layouts/BaseLayout/BaseLayout';


const routes = {
  home: <BaseLayout><Home /></BaseLayout>,
  404: <BaseLayout><Plug /></BaseLayout>
}
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={routes.home}></Route>
        <Route path="*" element={routes[404]}></Route>
      </Routes>
    </BrowserRouter>
  );
}
