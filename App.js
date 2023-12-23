import { StatusBar } from 'expo-status-bar';
import {View,Text,StyleSheet,Image} from 'react-native';
import Products from './src/component/Products/productos';
import ModalComponent from './src/component/ModalComponent/ModalComponent';
import { DataProvider } from './src/component/Context/DataContext';

export default function App(){
  return(
    <DataProvider>
    <View style={styles.container}>
      
      <StatusBar style='auto'/>
      <Products/>
      <ModalComponent/>
    </View>
    </DataProvider>
    
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
});