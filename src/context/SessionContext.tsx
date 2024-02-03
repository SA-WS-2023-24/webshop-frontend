import { ReactNode, createContext, useState } from "react"
import { doGetProductsFromCategoryRequest, doGetProductsRequest, doGetUserProfileRequest, doSearchProductRequest, getBasketRequest, postProductToBasketRequest, postRemoveProductFromBasketRequest, updateProductFromBasketRequest } from "../helper/requests"
import { v4 as uuidv4 } from 'uuid'
import { Basket } from "../routes/BasketPage"
import { Product } from "../routes/ProductsPage"

interface SessionContextType {
    getSessionId: () => string
    updateBasket: () => void
    addToBasket: (productId: string) => void
    updateProductInBasket: (productId: string, quantity: number) => void
    removeFromBasket: (productId: string) => void
    getProducts: () => void
    getProductsFromCategory: (category: string) => void
    searchProducts: (keyword: string) => void
    getUserProfile: () => void
    products: Product[]
    lastFilter: string
    basket: Basket
}

export const SessionContext = createContext<SessionContextType>({
    getSessionId: () => { return "" },
    updateBasket: () => { },
    addToBasket: () => { },
    updateProductInBasket: () => {},
    removeFromBasket: () => { },
    getProducts: () => { },
    getProductsFromCategory: () => {},
    searchProducts: () => { },
    getUserProfile: () => {},
    products: [],
    lastFilter: "",
    basket: { basketId: "", freeShippingLimit: 0, totalCost: 0, items: [] }
});

interface CustomerContextProviderProps {
    children: ReactNode
}

export default function SessionContextProvider({ children }: CustomerContextProviderProps) {
    const sessionIdIdentifier: string = "sessionId";
    const [basket, setBasket] = useState<Basket>({ basketId: "", freeShippingLimit: 0, totalCost: 0, items: [] });
    const [products, setProducts] = useState<Product[]>([])
    const [lastFilter, setLastFilter] = useState<string>("")

    function getSessionId(): string {
        if (sessionStorage.getItem(sessionIdIdentifier) === null) {
            sessionStorage.setItem(sessionIdIdentifier, uuidv4())
        }
        return sessionStorage.getItem(sessionIdIdentifier) as string;
    }

    async function searchProducts(keyword: string) {
        if (keyword.length > 2) {
            const params = new URLSearchParams({ keyword })
            const response = await doSearchProductRequest(params)
            if (response.data !== null && response.error === null) {
                setProducts(response.data)
            } else {
                console.error(`ERROR while getting products by keyword\n: ${response.error}`)
            }
        } else {
            getProducts()
        }
    }

    async function getProducts() {
        const response = await doGetProductsRequest()
        if (response.data !== null && response.error === null) {
            setProducts(response.data)
            setLastFilter("")
        } else {
            console.error(`ERROR while getting all products\n: ${response.error}`)
            setProducts([])
        }
    }

    async function getProductsFromCategory(category: string) {
        const response = await doGetProductsFromCategoryRequest(category.toLowerCase())
        if (response.data !== null && response.error === null) {
            setProducts(response.data)
            setLastFilter(category)
        } else {
            console.error(`ERROR while getting products from category\n: ${response.error}`)
            setProducts([])
        }
    }

    async function updateBasket() {
        const delay = 50;
        setTimeout(() => {
            getBasketRequest(getSessionId())
                .then(response => {
                    if (response.error === null && response.data !== null) {
                        setBasket(response.data)
                    } else {
                        console.error(`ERROR while getting the basket\n: ${response.error}`)
                    }
                })
        }, delay)
    }

    async function addToBasket(productId: string) {
        postProductToBasketRequest(getSessionId(), productId)
            .then(response => {
                if (response.error === null) {
                    updateBasket()
                } else {
                    console.error(`ERROR while adding product to basket\n: ${response.error}`)
                }
            })
    }

    async function updateProductInBasket(productId: string, quantity: number) {
        updateProductFromBasketRequest(getSessionId(), productId, quantity)
            .then(response => {
                if (response.error === null) {
                    updateBasket()
                } else {
                    console.error(`ERROR while adding product to basket\n: ${response.error}`)
                }
            })
    }

    async function removeFromBasket(productId: string) {
        postRemoveProductFromBasketRequest(getSessionId(), productId)
            .then(response => {
                if (response.error === null) {
                    updateBasket()
                }
                else {
                    console.error(`ERROR while removig product from basket\n: ${response.error}`)
                }
            })
    }

    async function getUserProfile() {
        doGetUserProfileRequest()
        .then(response => {
            if (response.error === null && response.data !== null) {
                console.log(response.data)
            } else {
                console.error(`ERROR while getting user profile\n: ${response.error}`)
            }
        })
    }

    return (
        <SessionContext.Provider value={{
            getSessionId,
            updateBasket,
            addToBasket,
            updateProductInBasket,
            removeFromBasket,
            getProducts,
            getProductsFromCategory,
            searchProducts,
            getUserProfile,
            products,
            lastFilter,
            basket,
        }}>
            {children}
        </SessionContext.Provider>
    );
}