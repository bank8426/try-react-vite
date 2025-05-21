import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from './App.jsx'
import Edit from './Edit.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, {
    path: "/edit/:id",
    element: <Edit />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)
