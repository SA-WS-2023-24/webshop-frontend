import { Basket, BasketItem } from "../routes/BasketPage";
import { Product } from "../routes/ProductsPage";
import { makeAddProductToBasketURL, makeGetBasketItemsURL, makeGetBasketURL, makeGetProductsFromCategoryURL, makeGetProductsURL, makeGetUserProfileURL, makeRemoveProductFromBasketURL, makeSearchProductURL } from "./urls";

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


interface PostRemoveProductFromBasketRequestProps {
    data: null | {}
    error: null | Error
}

export function postRemoveProductFromBasketRequest(basketId: string, productId: string): Promise<PostRemoveProductFromBasketRequestProps> {
    const url = makeRemoveProductFromBasketURL(basketId)
    console.log(`posted remove product from basket with URL: ${url}`)
    const respone = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            productId: productId
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


////////////////////////////////////////////////////////////////////////////////


interface SearchProductRequestProps {
    data: null | Product[]
    error: null | Error
}

export function doSearchProductRequest(params: URLSearchParams): Promise<SearchProductRequestProps> {
    const url = makeSearchProductURL(params)
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


interface GetProductsRequestProps {
    data: null | Product[]
    error: null | Error
}

export function doGetProductsRequest(): Promise<GetProductsRequestProps> {
    const url = makeGetProductsURL()
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
            console.log(`Got an error while fetching URL: ${url}: ${err}`)
            return { data: null, error: err }
        })
    return response;
}


////////////////////////////////////////////////////////////////////////////////


interface GetProductsFromCategoryRequestProps {
    data: null | Product[]
    error: null | Error
}

export function doGetProductsFromCategoryRequest(category: string): Promise<GetProductsFromCategoryRequestProps> {
    const url = makeGetProductsFromCategoryURL(category)
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
            console.log(`Got an error while fetching URL: ${url}: ${err}`)
            return { data: null, error: err }
        })
    return response;
}


////////////////////////////////////////////////////////////////////////////////


interface GetUserProfileRequestProps {
    data: null | string
    error: null | Error
}

export function doGetUserProfileRequest(): Promise<GetUserProfileRequestProps> {
    const url = makeGetUserProfileURL()
    console.log(`fetchGetBasketURL: ${url}`)
    const response = fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'localhost:3000',
        },
    })
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
            console.log(`Got an error while fetching URL: ${url}: ${err}`)
            return { data: null, error: err }
        })
    return response;
}