import "@/styles/global.scss"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { store } from './redux-toolkit/store';
import { Provider } from 'react-redux';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

import GetRoutes from './utils/routes';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(GetRoutes())
  );

  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <RouterProvider router={router} />
      </StyledEngineProvider>

    </Provider>
  )
}

export default App
