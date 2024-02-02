const ip = "192.168.49.2"
const productPort = 30001
const basketPort = 30003
const userPort = 30006


export function makeGetProductsURL() {
    return `http://${ip}:${productPort}/v1/products`
}

export function makeGetProductsFromCategoryURL(category: string) {
    return `http://${ip}:${productPort}/v1/products/filter?category=${category}`
}

export function makeSearchProductURL(params: URLSearchParams): string {
    return `http://${ip}:${productPort}/v1/product/search?${params}`
}

export function makeCreateBasketURL(basketId: string): string {
    return `http://${ip}:${basketPort}/v1/basket/${basketId}`
}

export function makeGetBasketURL(basketId: string): string {
    return `http://${ip}:${basketPort}/v1/basket/${basketId}`
}

export function makeAddProductToBasketURL(basketId: string): string {
    return `http://${ip}:${productPort}/v1/basket/${basketId}/add-to-basket`
}

export function makeRemoveProductFromBasketURL(basketId: string): string {
    return `http://${ip}:${productPort}/v1/basket/${basketId}/remove-from-basket`
}

export function makeGetBasketItemsURL(basketId: string): string {
    return `http://${ip}:${basketPort}/v1/basket/${basketId}/items`
}

export function makeGetUserProfileURL() {
    return `http://${ip}:${userPort}/v1/user/profile`
}