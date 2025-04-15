import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cities from './pages/Cities';
import CityDetail from './pages/CityDetail';
import UnderConstruction from './components/UnderConstruction';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/cities",
    element: <Cities/>
  },
  {
    path: "/cities/:name", 
    element: <CityDetail/>
  },
  {
    path: "/under-construction",
    element: <UnderConstruction 
      message="We're working hard to bring you this feature soon!" 
    />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;