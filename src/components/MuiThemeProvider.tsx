import { createTheme, ThemeProvider } from '@mui/material/styles';


const customTheme = createTheme({
    palette: {
        primary: {
            main: '#213f7d',
        },
        secondary: {
            main: '#39cdcc',
        },
    },
});

function MuiThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={customTheme}>
            {children}
        </ThemeProvider>
    )
}

export default MuiThemeProvider