export default interface OrderType {
    payment: number,
    id: number,
    name: string,
    time_to_complete: number,
    materials_needed:
    {
        name: string,
        amount: number,
        icon: string
    }[]
  }