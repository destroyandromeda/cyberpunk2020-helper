import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Decks, Deck, Home, Plug } from "pages";
import { Root } from 'layouts';

const root = document.getElementById('root') as HTMLElement

ReactDOM
  .createRoot(root)
  .render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="cyber-decks" >
              <Route index element={<Decks />} />
              <Route path=":id" element={<Deck />} />
            </Route>
            <Route path="programs">
              <Route index element={<>programs</>} />
              <Route path=":id" element={<>programs/id</>} />
            </Route>
            <Route path="*" element={<Plug />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
