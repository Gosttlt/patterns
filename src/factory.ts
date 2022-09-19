interface IFood {
  price: number
  weight: number
  name: string
  getInfo: (name: string, price: number, weight: number) => void
}

class Foods implements IFood {
  price: number
  weight: number
  name: string
  constructor() {
    this.price = 0
    this.weight = 0
    this.name = ''
  }
  getInfo() {
    console.log(
      `Ваш заказ: ${this.name}, Цена: ${this.price} руб., Вес: ${this.weight} гр.`,
    )
  }
}

class Pizza extends Foods {
  price: number
  weight: number
  name: string
  constructor() {
    super()
    this.price = 599
    this.weight = 500
    this.name = 'Пицца'
  }
}

class Sushi extends Foods {
  price: number
  weight: number
  name: string
  constructor() {
    super()
    this.price = 299
    this.weight = 200
    this.name = 'Суши'
  }
  getInfo() {
    console.log(
      `Ваш заказ: ${this.name}, Цена: ${this.price} руб., Вес: ${this.weight} гр.`,
    )
  }
}

class FrenchFries extends Foods {
  price: number
  weight: number
  name: string
  constructor() {
    super()
    this.price = 199
    this.weight = 150
    this.name = 'Картофель фри'
  }
}

enum EFoodsType {
  pizza = 'PIZZA',
  french = 'FRENCH',
  suchi = 'SUSHI',
}
type TOrder = {
  [key in EFoodsType]: number
}

class FoodFactory {
  static list = {
    [EFoodsType.pizza]: Pizza,
    [EFoodsType.french]: FrenchFries,
    [EFoodsType.suchi]: Sushi,
  }
  #orders: TOrder = {
    [EFoodsType.pizza]: 0,
    [EFoodsType.french]: 0,
    [EFoodsType.suchi]: 0,
  }

  createOrder(type: EFoodsType) {
    this.#orders[type]++
    return new FoodFactory.list[type]()
  }

  getOrdersInfo() {
    console.log(
      `Всего было заказано: ${Object.entries(this.#orders).map(order =>
        order.join(': '),
      )}`,
    )
  }
}
const foodFactory = new FoodFactory()

const french = foodFactory.createOrder(EFoodsType.french)
const french2 = foodFactory.createOrder(EFoodsType.french)
const french3 = foodFactory.createOrder(EFoodsType.suchi)
const french4 = foodFactory.createOrder(EFoodsType.pizza)
french.getInfo()
french2.getInfo()
french3.getInfo()
french4.getInfo()
foodFactory.getOrdersInfo()
