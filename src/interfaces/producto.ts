export interface Product {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    tags: string[]
    brand?: string
    sku: string
    weight: number
    dimensions: string
    warrantyInformation: string
    shippingInformation: string
    availabilityStatus: string
    reviews: string[]
    returnPolicy: string
    minimumOrderQuantity: number
    meta: string
    images: string
    thumbnail: string
}

export interface Grupos {
    [key: string]: string[];
  }