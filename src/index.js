/* React */
import React from 'react';
import ReactDOM from 'react-dom/client';

/* Router */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/* Styles */
import './styles.css';

/* Components */
import { Home } from './pages/Home';
import { Destination } from './pages/Destination';
import { Crew } from './pages/Crew';
import { Technology } from './pages/Technology';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/destination',
    element: <Destination />
  },
  {
    path: 'crew',
    element: <Crew />
  },
  {
    path: 'technology',
    element: <Technology />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  <RouterProvider router={browserRouter} />
</React.StrictMode>);
