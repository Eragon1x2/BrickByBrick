export default interface PlayerType {
    name: string,
    money: number,
    materials: {
      [key: string]: number
    }
  }