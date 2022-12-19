import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Decks, Deck, Home, Plug, Programs, Program } from "pages";
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
            <Route path="decks" >
              <Route index element={<Decks />} />
              <Route path=":id" element={<Deck />} />
            </Route>
            <Route path="programs">
              <Route index element={<Programs />} />
              <Route path=":id" element={<Program />} />
            </Route>
            <Route path="*" element={<Plug />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
