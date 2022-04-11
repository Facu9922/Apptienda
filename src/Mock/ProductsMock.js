const products =[
    {
      "marca": "Jordan",
      "modelo": "6-17-23",
      "img": "https://images.footlocker.com/is/image/EBFL2/D7330006_a1?wid=519&hei=519&fmt=png-alpha",
      "precio": 12000,
      "id": 3,
      "stock":4,
      "detalle": "Celebrate the evolution of the legacy with the Jordan 6-17-23. Putting a fresh spin on heritage designs, these sneakers combine the details from three classic Air Jordan shoes. The familiar elements like the bump-out collar and heel spoiler nod to the AJ6, while the line of molded lace loops and smooth toe are inspired by the AJ17. The sculpted midsole overlays of the AJ23 hook to history while forging a new look for the future. Featuring a trio of comfort, durability, and style, the Jordan 6-17-23 is the iconic symbol of Jordan attitude and innovation.",
      "size": "38,39,40,41"

    },
    {
      "marca": "Jordan",
      "modelo": "Flight Club 91",
      "img": "https://images.footlocker.com/is/image/EBFL2/686003PS_a1?wid=2000&hei=2000&fmt=png-alpha",
      "precio": 14000,
      "id": 4,
      "stock": 5,
      "detalle": "Welcome to the Flight Club! Taking inspiration from the greatest player of all time, the Jordan Flight Club '91 is an off-court shoe that offers a legendary look. Take flight like Mike with this fresh kick that features a premium look and feel that can't be beat.",
      "size": "38,39,40,41,42"
    },
    {
      "marca": "Nike",
      "modelo": "Jordan 19",
      "img": "https://images.footlocker.com/is/image/EBFL2/D0418400_a1?wid=519&hei=519&fmt=png-alpha",
      "precio": 16000,
      "id": 5,
      "stock": 12,
      "detalle": "zapatillas de basket"
    }
    
]

export default products

export const getProductsById = (id)=>{
  return new Promise (resolve=>{
    setTimeout(() => {
      resolve(products.find(prod=> prod.id === id))
    },500);
  })
}