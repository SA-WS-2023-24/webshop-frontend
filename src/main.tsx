import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootPage from './routes/RootPage'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'
import ErrorPage from './routes/ErrorPage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        errorElement: <ErrorPage />,
    }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>,
)
