import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootPage from './routes/RootPage'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'
import ErrorPage from './routes/ErrorPage'
import HomePage from './routes/HomePage'
import ProductDetailsPage, { loader as productDetailsLoader } from './routes/ProductDetailsPage'
import BasketPage from './routes/BasketPage'
import ProductsPage from './routes/ProductsPage'
import { Login } from '@mui/icons-material'
import LoginPage from './routes/LoginPage'

// The router to specify our routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        errorElement: <ErrorPage />,    // shown when url doesn't match any route
        children: [
            {
                /* 
                    The following line is needed to insert the home page into 
                    the <Outlet /> of the route page without specifying a route
                    other than '/'.

                    Otherwise you would only see the navigation bar and the
                    footer when enering 'www.shop.com as' url, which is not what
                    we want.
                */
                index: true,
                element: <HomePage />
            },
            {
                path: "/products/:productId",
                element: <ProductDetailsPage />,
                loader: productDetailsLoader,
            },
            {
                path: "/products",
                element: <ProductsPage />,
            },
            {
                path: "/basket",
                element: <BasketPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>,
)
