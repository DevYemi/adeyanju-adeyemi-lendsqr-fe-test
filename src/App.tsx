import "@/styles/global.scss"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { store } from './redux-toolkit/store';
import { Provider } from 'react-redux';

import GetRoutes from './utils/routes';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(GetRoutes())
  );

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
