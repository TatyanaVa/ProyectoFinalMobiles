import React, { createContext, useState} from "react";


const DataContext=createContext();


const DataProvider=({Children})=>{
    const [cart,setCart]=useState([]);

    const buyProducts=(product)=>{
        const productRepeat=cart.find((item)=>item.id===product.id)
        if(productRepeat){ //comprobar si existe productos repetidos
            setCart(cart.map((item)=>(item.id===product.id?{...product,quanty:productRepeat.quanty+1}:item)));
        }else{
            //volver a traer los productos al carrito
            setCart([...cart,{...product,quanty:1}]);
        }
    };
    return <DataContext.Provider value={{cart,setCart,buyProducts}}>{Children}</DataContext.Provider>
};

export{DataContext,DataProvider};