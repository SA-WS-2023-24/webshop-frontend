import { Basket, BasketItem } from "../routes/BasketPage";
import { makeAddProductToBasketURL, makeCreateBasketURL, makeGetBasketItemsURL, makeGetBasketURL } from "./urls";

interface PostProductToBasketRequestProps {
    data: null | {}
    error: null | Error
}

export function postProductToBasketRequest(basketId: string, productId: string): Promise<PostProductToBasketRequestProps> {
    const url = makeAddProductToBasketURL(basketId)
    console.log(`posted product to basket with URL: ${url}`)
    const respone = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            productId: productId,
            quantity: 1
        })
    })
        .then(response => {
            if (response.status === 404) {
                throw Error("No Data Found");
            }
            if (response.status === 500) {
                throw Error("Server Error");
            }
            if (!response.ok) {
                throw Error("Error Fetching Data");
            }
            return {}
        })
        .then(data => {
            return { data: data, error: null };
        })
        .catch(err => {
            console.log(`Got an error while posting to URL: ${url}: ${err}`)
            return { data: null, error: err }
        })
    return respone;
}


////////////////////////////////////////////////////////////////////////////////


interface GetBasketRequestProps {
    data: null | Basket
    error: null | Error
}

export function getBasketRequest(basketId: string): Promise<GetBasketRequestProps> {
    const url = makeGetBasketURL(basketId)
    console.log(`fetchGetBasketURL: ${url}`)
    const response = fetch(url)
        .then(response => {
            if (response.status === 404) {
                throw new Error("No Data Found");
            }
            if (response.status === 500) {
                throw new Error("Server Error");
            }
            if (!response.ok) {
                throw new Error("Error Fetching Data");
            }
            return response.json()
        })
        .then(data => {
            return { data: data, error: null }
        })
        .catch(err => {
            console.log(`Got an error while fetching URL: ${url}: ${err.message}`)
            return { data: null, error: err }
        })
    return response;
}


////////////////////////////////////////////////////////////////////////////////


interface PostBasketRequestProps {
    data: null | {}
    error: null | Error
}

export function postBasketRequest(basketId: string): Promise<PostBasketRequestProps> {
    const url = makeCreateBasketURL(basketId)
    const respone = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (response.status === 404) {
                throw Error("No Data Found");
            }
            if (response.status === 500) {
                throw Error("Server Error");
            }
            if (!response.ok) {
                throw Error("Error Fetching Data");
            }
            return {}
        })
        .then(data => {
            return { data: data, error: null };
        })
        .catch(err => {
            console.log(`Got an error while posting to URL: ${url}: ${err.message}`)
            return { data: null, error: err }
        })
    return respone;
}


////////////////////////////////////////////////////////////////////////////////


interface GetBasketItemsRequestProps {
    data: null | BasketItem[]
    error: null | Error
}

export function getBasketItemsRequest(basketId: string): Promise<GetBasketItemsRequestProps> {
    const url = makeGetBasketItemsURL(basketId)
    console.log(`fetchGetBasketURL: ${url}`)
    const response = fetch(url)
        .then(response => {
            if (response.status === 404) {
                throw new Error("No Data Found");
            }
            if (response.status === 500) {
                throw new Error("Server Error");
            }
            if (!response.ok) {
                throw new Error("Error Fetching Data");
            }
            return response.json()
        })
        .then(data => {
            return { data: data, error: null }
        })
        .catch(err => {
            console.log(`Got an error while fetching URL: ${url}: ${err.message}`)
            return { data: null, error: err }
        })
    return response;
}
