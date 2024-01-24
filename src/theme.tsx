import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#FFBC6C',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#FFF8E2',
            paper: '#FFF8E2',
        },
    },
    typography: {
        fontFamily: '"Francois One", "Roboto", "Helvetica", "Arial", sans-serif',
    },
});

export default theme;