import React,{useContext} from "react";
import { DataContext } from "../Context/DataContext.js";
import { Pressable,Text, View, FlatList, Image, StyleSheet } from "react-native";

const Products = () => {
    //traigo la funcion byproducts desde el componente datacontext
    const {buyProducts}=useContext(DataContext);
    const productos = [
        {
            id: 1,
            productname: "TecnoCamon 18",
            precio: 640,
            img: "https://firebasestorage.googleapis.com/v0/b/app-telefonia.appspot.com/o/Tecno-Camon.jpg?alt=media&token=1ab59488-0754-48e1-abbd-2b99575327ef"
        },
        {
            "nombre": "Samsung Galaxy S21",
            "precio": 899.99,
            img: "https://firebasestorage.googleapis.com/v0/b/app-telefonia.appspot.com/o/samsung-s21-5g.jpg?alt=media&token=4dae5a6b-344e-429c-95d6-a6702c41eab2"
        },
        {
            "nombre": "Google Pixel 6",
            "precio": 799.99,
            img: "https://firebasestorage.googleapis.com/v0/b/app-telefonia.appspot.com/o/googlepixel.jpg?alt=media&token=1bdb747e-a730-4ac2-b399-1216c21ca3af"
        },
        {
            "nombre": "OnePlus 9",
            "precio": 749.99,
            img: "https://firebasestorage.googleapis.com/v0/b/app-telefonia.appspot.com/o/oneplus9.jpg?alt=media&token=5492cc6f-312d-4998-ae1d-7ba7d944bf80"
        },
        {
            "nombre": "Xiaomi Mi 11",
            "precio": 699.99,
            img: "https://firebasestorage.googleapis.com/v0/b/app-telefonia.appspot.com/o/xiaomi-mi-11.jpg?alt=media&token=e9b5762b-cc3d-4921-ba34-c962070683d1"
        },
    ];
    const handleBuyPress =(product)=>{
        buyProducts(product);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.header}>TecnoMobil</Text>
            <FlatList data={productos}
                renderItem={({ item }) => (
                    <View style={styles.productItem}>
                        <Image source={{ uri: item.img }} style={styles.productImage} />
                        <Text style={styles.productname}>{item.productname}</Text>
                        <Text style={styles.productPrecio}>Precio: {item.precio} $</Text>
                        <Pressable style={styles.buyButton} onPress={()=>handleBuyPress(item)}>
                            <Text style={styles.buyButtonText}>Comprar</Text>
                        </Pressable>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        marginTop: 50,
        paddingBottom: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 12,
        textAlign: "center",
    },
    productItem: {
        borderBottomWidth: 0,
        borderBlockColor: "cc3d",
        paddingVertical: "18",
        alignItems: "center",
    },
    productImage: {
        width: 170,
        height: 145,
        resizeMode: "cover",
        marginBottom: 8,
    },
    productname: {
        fontSize: 18,
        marginBottom: 4,
    },
    productPrecio: {
        fontSize: 16,
        color: "green",
    },
    buyButton: {
        backgroundColor: "purple",
        padding: 8,
        width: 150,
        marginTop: 8,
        borderRadius: 5,
    },
    buyButtonText: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
    },
});
export default Products;