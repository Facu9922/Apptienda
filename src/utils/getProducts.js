import products from "../Mock/ProductsMock";

const getProducts = (marcaId)=>{
    return new Promise ((resolve, reject)=>{
        const check =true;
        setTimeout(()=>{
            if(check){
                resolve(marcaId ? products.filter(prod => prod.marca === marcaId) : products)
            }else{
                reject("error")
            }
        }, 400)
    })
}
export default getProducts