import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SegundoComponente from "./componentes/SegundoComponente";
import JavaScriptComponente from './componentes/JavaScriptComponente';
import Perfil from "./componentes/Perfil";
import JavaScriptComponente from "./componentes/JavaScriptComponente";

export default function App() {
  return (
    <View style={styles.container}>

      <PrimeiroComponente />
      <SegundoComponente />
      <JavaScriptComponente />
      <Perfil 
      nome= "Matheus"
      sobrenome= "Bruno"
      idade= {24}
/>
<Perfil 
      nome= "deyvin"
      sobrenome= "cabrito"
      idade= {20}
/>
<Perfil 
      nome= "Firmino"
      sobrenome= "fabricio"
      idade= {20}
/>




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
