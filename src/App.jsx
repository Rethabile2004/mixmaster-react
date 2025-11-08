import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Cocktail, Error, HomeLayout, Landing, Newsletter, SinglePageError } from "./pages";
import { loader as landingLoader } from "./pages/Landing";
const route = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement:<Error/>,
    children: [
      {
        index:true,
        errorElement:<SinglePageError/>,
        element: <Landing />,
        loader:landingLoader
      },
      {
        path: 'cocktail/:id',
        element: <Cocktail />
      },
      {
        path: 'about',
        element: <About />
      },
      , {
        path: '/newsletter',
        element: <Newsletter />
      }
    ]
  },

])

const App = () => {
  return <RouterProvider router={route}>

  </RouterProvider>;
};
export default App;
