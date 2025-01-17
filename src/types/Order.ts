export default interface OrderType {
    payment: number,
    time_to_complete: number,
    materials_needed: {
      [key: string]: number
    }
  }