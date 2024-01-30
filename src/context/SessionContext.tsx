import { ReactNode, createContext, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import { getBasketRequest, postBasketRequest, postProductToBasketRequest } from "../helper/requests"

interface SessionContextType {
    getSessionId: () => string
    getCartItemCount: () => number
    addToBasket: (productId: string) => void
}

export const SessionContext = createContext<SessionContextType>({
    getSessionId: () => { return "" },
    getCartItemCount: () => { return 0 },
    addToBasket: () => { }
});

interface CustomerContextProviderProps {
    children: ReactNode
}


export default function SessionContextProvider({ children }: CustomerContextProviderProps) {
    const sessionIdIdentifier: string = "sessionId";

    useEffect(() => {
        // first, check if we already have a session
        if (sessionStorage.getItem(sessionIdIdentifier) == null) {
            //if not, we create a session id
            sessionStorage.setItem(sessionIdIdentifier, uuidv4())
        }
        // from here, we definitly have a sessionId

        async function initilizeBasket() {
            // now we check if a basket alreasy exists for this session
            const { error } = await getBasketRequest(getSessionId())

            // if we get an error: no basket existed, so we create one
            if (error != null) {
                console.log(`Got and error when requesting the basket: ${error}`)
                await postBasketRequest(getSessionId())
            }
            // now we are done with initilizing
        }

        initilizeBasket()
    }, [])

    function getSessionId(): string {
        return sessionStorage.getItem(sessionIdIdentifier) as string
    }

    function getCartItemCount(): number {
        return 0;
    }

    function addToBasket(productId: string) {
        postProductToBasketRequest(getSessionId(), productId)
    }

    return (
        <SessionContext.Provider value={{
            getSessionId,
            getCartItemCount,
            addToBasket
        }}>
            {children}
        </SessionContext.Provider>
    );
}