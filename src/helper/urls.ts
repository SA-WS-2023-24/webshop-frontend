export function makeCreateBasketURL(basketId: string): string {
    return `http://192.168.49.2:30003/v1/basket/${basketId}`
}

export function makeGetBasketURL(basketId: string): string {
    return `http://192.168.49.2:30003/v1/basket/${basketId}`
}

export function makeAddProductToBasketURL(basketId: string): string {
    return `http://192.168.49.2:30001/v1/basket/${basketId}/add-to-basket`
}

export function makeRemoveProductFromBasketURL(basketId: string): string {
    return `http://192.168.49.2:30001/v1/basket/${basketId}/remove-from-basket`
}

export function makeGetBasketItemsURL(basketId: string): string {
    return `http://192.168.49.2:30003/v1/basket/${basketId}/items`
}