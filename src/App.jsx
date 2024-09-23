
import './App.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Business from './pages/Business/Business';
import Politics from './pages/Politics/Politics';
import Culture from './pages/culture/Culture';
import Dashboard from './layouts/Dashboard';
import SignInForm from './pages/Authentication/SignInForm';
import Registation from './pages/Authentication/Registation'
import AddPost from './pages/dashboard/auther/AddPost';
import Blogs from './pages/Blogs/Blogs';

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
        path: "/blogs",
        element: <Blogs />,
      },

      {
        path: "/politics",
        element: <Politics />,
      },
      {
        path: "/login",
        element: <SignInForm />,
      },
      {
        path: "/registation",
        element: <Registation />,
      },

    ],
  },
  {
    path:"/dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path: "/dashboard/addpost",
        element: <AddPost />,
      },
    ]
  }
]);

function App() {
 

  return <RouterProvider router={router} />
}

export default App
