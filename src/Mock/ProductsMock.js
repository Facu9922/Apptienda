const products =[
    {
      "marca": "Jordan",
      "modelo": "6-17-23",
      "img": "https://images.footlocker.com/is/image/EBFL2/D7330006_a1?wid=519&hei=519&fmt=png-alpha",
      "precio": 12000,
      "id": 3,
      "stock":4,
      "detalle": "zapatillas de basket"
    },
    {
      "marca": "Jordan",
      "modelo": "Flight Club 91",
      "img": "https://images.footlocker.com/is/image/EBFL2/686003PS_a1?wid=2000&hei=2000&fmt=png-alpha",
      "precio": 14000,
      "id": 4,
      "stock": 5,
    },
    {
      "marca": "Nike",
      "modelo": "Jordan 19",
      "img": "https://images.footlocker.com/is/image/EBFL2/D0418400_a1?wid=519&hei=519&fmt=png-alpha",
      "precio": 16000,
      "id": 5,
      "stock": 5,
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