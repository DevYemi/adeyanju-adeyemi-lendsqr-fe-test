import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux';
import { store } from '@/redux-toolkit/store';
import MuiThemeProvider from '@/components/MuiThemeProvider';
import { StyledEngineProvider } from '@mui/material';


const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <StyledEngineProvider injectFirst>
                <MuiThemeProvider>
                    {children}
                </MuiThemeProvider>
            </StyledEngineProvider>

        </Provider>


    )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }