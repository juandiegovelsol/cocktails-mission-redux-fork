/* eslint-disable comma-dangle */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Cocktails } from '../pages';

const routerCongfig = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h1>There has been an error</h1>,
  },
  {
    path: '/cocktails',
    element: <Cocktails />,
  },
]);

function CustomRouter() {
  return <RouterProvider router={routerCongfig} />;
}

// para eslint se sugiere hacer default export cuando hay un solo export en el archivo.
export default CustomRouter;
