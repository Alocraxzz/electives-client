import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {Electives} from "./pages/Electives";
import {Exams} from "./pages/Exams";
import {Students} from "./pages/Students";
import {Subjects} from "./pages/Subjects";
import {ErrorPage} from "./error-page";

const router = createBrowserRouter([
  {path: "/", element: <App/>, errorElement: <ErrorPage/>},
  {path: "/electives", element: <Electives/>, errorElement: <ErrorPage/>},
  {path: "/exams", element: <Exams/>, errorElement: <ErrorPage/>},
  {path: "/students", element: <Students/>, errorElement: <ErrorPage/>},
  {path: "/subjects", element: <Subjects/>, errorElement: <ErrorPage/>},
]);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
