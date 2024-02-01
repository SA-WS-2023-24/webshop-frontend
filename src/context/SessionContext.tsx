import { ReactNode, createContext, useState } from "react"
import { getBasketRequest, postProductToBasketRequest, postRemoveProductFromBasketRequest } from "../helper/requests"
import { v4 as uuidv4 } from 'uuid'
import { Basket } from "../routes/BasketPage"

interface SessionContextType {
    getSessionId: () => string
    addToBasket: (productId: string) => void
    removeFromBasket: (productId: string) => void
    basket: Basket
}

export const SessionContext = createContext<SessionContextType>({
    getSessionId: () => { return "" },
    addToBasket: () => {},
    removeFromBasket: () => {},
    basket: {basketId: "", freeShippingLimit: 0, totalCost: 0, items: []}
});

interface CustomerContextProviderProps {
    children: ReactNode
}

export default function SessionContextProvider({ children }: CustomerContextProviderProps) {
    const sessionIdIdentifier: string = "sessionId";
    const [basket, setBasket] = useState<Basket>({basketId: "", freeShippingLimit: 0, totalCost: 0, items: []});

    function getSessionId(): string {
        if (sessionStorage.getItem(sessionIdIdentifier) === null) {
            sessionStorage.setItem(sessionIdIdentifier, uuidv4())
        }
        return sessionStorage.getItem(sessionIdIdentifier) as string;
    }

    async function updateBasket() {
        getBasketRequest(getSessionId())
            .then(response => {
                if (response.error === null && response.data !== null) {
                    const data = response.data;
                    setBasket(response.data)
                } else {
                    console.log(`ERROR while getting the basket\n: ${response.error}`)
                }
            })
    }

    function addToBasket(productId: string) {
        postProductToBasketRequest(getSessionId(), productId)
            .then(response => {
                if(response.error === null) {
                    updateBasket()
                } else {
                    console.log(`ERROR while adding product to basket\n: ${response.error}`)
                }
            })
    }

    function removeFromBasket(productId: string) {
        postRemoveProductFromBasketRequest(getSessionId(), productId)
            .then(response => {
                if (response.error === null) {
                    updateBasket()
                }
                else {
                    console.log(`ERROR while removig product from basket\n: ${response.error}`)
                }
            })
    }

    return (
        <SessionContext.Provider value={{
            getSessionId,
            addToBasket,
            removeFromBasket,
            basket,
        }}>
            {children}
        </SessionContext.Provider>
    );
}