import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Cocktail, Error, HomeLayout, Landing, Newsletter } from "./pages";

const route = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index:true,
        element: <About />
      },
      {
        path: 'landing',
        element: <Landing />
      }
      , {
        path: '/about',
        element: <About />
      }
    ]
  },

])

const App = () => {
  return <RouterProvider router={route}>

  </RouterProvider>;
};
export default App;
