
import './App.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Business from './pages/Business/Business';
import Politics from './pages/Politics/Politics';
import Culture from './pages/culture/Culture';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      

      {
        path: "/blogs/:id",
        element: <Details />,
        loader: ({ params }) => fetch(`https://dummyapi.online/api/${params.id}`)
      },
      {
        path: "/culture",
        element: <Culture />,
      },

      {
        path: "/Business",
        element: <Business />,
      },
      {
        path: "/politics",
        element: <Politics />,
      },
    ],
  },
]);

function App() {
 

  return <RouterProvider router={router} />
}

export default App
