import products from "../Mock/ProductsMock";

const getProducts = ()=>{
    return new Promise ((resolve, reject)=>{
        const check =true;
        setTimeout(()=>{
            if(check){
                resolve(products)
            }else{
                reject("error")
            }
        }, 400)
    })
}
export default getProducts