
import './App.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
 

  return <RouterProvider router={router} />
}

export default App
