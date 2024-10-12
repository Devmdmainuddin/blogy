
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
import EditPost from './pages/dashboard/auther/EditPost';
import ManagePost from './pages/dashboard/auther/ManagePost';
import Blogs from './pages/Blogs/Blogs';
import PrivateRoute from './providers/PrivateRoute';

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
        loader: ({ params }) => fetch(`https://blogy-server-ten.vercel.app/blogs/${params.id}`)
      },
      {
        path: "/culture",
        element: <Culture />,
      },

      {
        path: "/business",
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
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path: "/dashboard/managepost",
        element:<PrivateRoute><ManagePost /></PrivateRoute> ,
      },
      {
        path: "/dashboard/addpost",
        element:<PrivateRoute><AddPost /></PrivateRoute> ,
      },
      {
        path: "/dashboard/editpost/:id",
        element:<PrivateRoute><EditPost /></PrivateRoute> ,
        loader: ({ params }) => fetch(`https://blogy-server-ten.vercel.app/blogs/${params.id}`)
      },
    ]
  }
]);

function App() {
 

  return <RouterProvider router={router} />
}

export default App
