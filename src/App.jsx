import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Cocktail, Error, HomeLayout, Landing, Newsletter, SinglePageError } from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCoctailLoader } from "./pages/Cocktail";
import { action as newsletterAction } from "./pages/Newsletter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5
    }
  }
})

const route = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        errorElement: <SinglePageError />,
        element: <Landing />,
        loader: landingLoader(queryClient)
      },
      {
        path: 'cocktail/:id',
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader: singleCoctailLoader(queryClient)
      },
      {
        path: 'about',
        element: <About />
      },
      , {
        path: '/newsletter',
        element: <Newsletter />,
        action: newsletterAction
      }
    ]
  },

])

const App = () => {
  return (
    <QueryClientProvider client={queryClient} >
      <RouterProvider router={route} />
    </QueryClientProvider>
    //
  )
};
export default App;
