import "@/styles/global.scss"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { store } from './redux-toolkit/store';
import { Provider } from 'react-redux';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import GetRoutes from './utils/routes';
import MuiThemeProvider from "./components/MuiThemeProvider";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(GetRoutes())
  );

  return (
    <Provider store={store}> {/* Redux state provider */}
      <StyledEngineProvider injectFirst> {/* MUI style specifity provider */}
        <MuiThemeProvider> {/* MUI theme provider */}
          <LocalizationProvider dateAdapter={AdapterDayjs}> {/* Mui date picker provider */}
            <RouterProvider router={router} />
          </LocalizationProvider>
        </MuiThemeProvider>
      </StyledEngineProvider>

    </Provider>
  )
}

export default App
