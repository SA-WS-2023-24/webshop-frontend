import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootPage from './routes/RootPage'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'
import ErrorPage from './routes/ErrorPage'
import HomePage from './routes/HomePage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
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
