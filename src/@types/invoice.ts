export interface IInvoice {
  name: string
}

export interface IRecentInvoice {
  id: string
  date: Date
  products: number
  value: number
}
