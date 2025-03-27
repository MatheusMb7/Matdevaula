import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import JavaScriptComponente from './componentes/JavaScriptComponente';
import Perfil from './componentes/Perfil';
import ListaComponente from './componentes/ListaComponente';


export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
  
    {/* <PrimeiroComponente/>
    <JavaScriptComponente/>
    <Perfil
     nome='Matheus'
    idade={24} 
    telefone='61996703930'
    email='matheussbsiilva@gmail.com'    
    
    />

<Perfil
     nome='firmino'
    idade={20} 
    telefone='40028922'
    email='firmininhodelas@gmail.com'    
    
    />

<Perfil
     nome='Deyverson'
    idade={20} 
    telefone='190'
    email='gigantecagado@gmail.com'    
    
    /> */}

    <ListaComponente/>
    

      
      


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
